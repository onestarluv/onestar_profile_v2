# 슬한별 프로필

SOOP 스트리머 슬한별의 프로필 홈페이지예요. 방송 시간, 실시간 방송, 프로필, 발자취, 링크를 한 페이지에 담았어요.

## 파일

| 파일 | 내용 |
|---|---|
| `index.html` | 페이지 전체 (디자인 토큰은 맨 위 `:root`에서 바꿔요) |
| `assets/` | 아이콘, 사진, 배너 이미지, 공유 카드(`og.png`), 배경음악(`bgm/`) |
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

## 배경음악 (BGM)

화면 왼쪽 아래 플레이어로 켜고 끄고, 소리 크기를 조절할 수 있어요. 브라우저가 자동 재생을 막기 때문에, 페이지를 처음 누르거나 키를 누를 때 켜져요. 플레이어에서 직접 끄면 그 선택을 기억해서 다음부터는 자동으로 켜지 않아요. 실시간 방송이 재생되는 동안은 잠깐 멈췄다가 플레이어를 닫으면 이어서 나와요.

- 곡: **Spring Step** (봄/귀여운/Cute) — 브금대통령 (BGM President)
- 채널: https://www.youtube.com/@bgmpresident · 사이트: https://www.bgmpresident.com

음악 파일은 `assets/bgm/spring_step.mp3` 에 두면 돼요. 파일이 없으면 플레이어는 숨겨져요.
브금대통령 곡은 출처를 밝히는 조건으로 쓸 수 있고, 음원 파일 자체를 다른 곳에 다시 올리는 건 막혀 있을 수 있어요.
파일을 저장소에 올리기 전에 브금대통령 이용 규칙(https://www.bgmpresident.com/policy.html)을 확인하거나 official@bgmpresident.com 에 문의해 주세요.
