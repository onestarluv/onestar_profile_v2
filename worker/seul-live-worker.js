// 슬한별 방송 상태 프록시 (Cloudflare Workers 무료 플랜용)
// 브라우저가 SOOP 정보를 직접 못 읽을 때(CORS) 이 워커가 대신 읽어서 돌려줘요.
// 응답: { "is_live": true/false, "title": "...", "viewers": 123 }
const BJ = 'seuls2';
const ALLOW = '*'; // 홈페이지 주소로 바꾸면 더 안전해요. 예: 'https://onestarluv.github.io'

export default {
  async fetch() {
    const headers = {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': ALLOW,
      'Cache-Control': 'public, max-age=30',
    };
    for (const host of ['chapi.sooplive.co.kr', 'chapi.sooplive.com']) {
      try {
        const r = await fetch(`https://${host}/api/${BJ}/station`, {
          headers: { 'User-Agent': 'Mozilla/5.0' },
          cf: { cacheTtl: 30 },
        });
        if (!r.ok) continue;
        const d = await r.json();
        const b = d && d.broad;
        const body = b && b.broad_no
          ? { is_live: true, title: b.broad_title || '', viewers: b.current_sum_viewer || 0 }
          : { is_live: false };
        return new Response(JSON.stringify(body), { headers });
      } catch (e) {}
    }
    return new Response(JSON.stringify({ error: 'unavailable' }), { status: 502, headers });
  },
};
