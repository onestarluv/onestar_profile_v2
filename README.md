# 슬한별 프로필

SOOP 스트리머 슬한별의 프로필 홈페이지예요. 방송 시간, 실시간 방송, 프로필, 발자취, 링크를 한 페이지에 담았어요.

## 파일

| 파일 | 내용 |
|---|---|
| `index.html` | 페이지 전체 (디자인 토큰은 맨 위 `:root`에서 바꿔요) |
| `assets/` | 아이콘, 사진, 배너 이미지, 트레일러 영상 |
| `worker/seul-live-worker.js` | 방송 여부를 대신 확인해 주는 프록시 (필요할 때만) |

## 사이트로 공개하기 (GitHub Pages)

Settings → Pages → Build and deployment에서 Source를 **Deploy from a branch**, Branch를 **main / (root)** 로 고르고 저장해요.
잠시 뒤 `https://onestarluv.github.io/onestar_profile_v2/` 에서 열려요.

## 방송 중 표시

페이지는 SOOP 방송국 정보(`chapi.sooplive.co.kr/api/seuls2/station`)를 1분마다 확인해요.
브라우저가 이 정보를 직접 못 읽으면(CORS) 방송 시간표로 안내해요.

직접 읽기가 막혀 있다면:

1. Cloudflare Workers에 `worker/seul-live-worker.js`를 올려요 (무료).
2. 받은 주소를 `index.html`의 `const LIVE_PROXY = '';` 따옴표 안에 넣어요.

## 내용 고치기

- 실시간 플레이어 주소: `index.html`의 `LIVE_EMBED`
- 발자취: `index.html`에서 `id="history"` 부분의 목록 (날짜순)
- 방송 시간·명령어 답변: `index.html` 아래쪽 스크립트
