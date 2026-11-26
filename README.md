# Green Tests, Nothing Works: The Excuse Contest

[![Bounty](https://make.fun/badge/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc.svg)](https://make.fun/bounty/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc?ref=5548afh3)
[![Rank](https://make.fun/badge/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc/Dilslino/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc-entry-v1/rank.svg)](https://make.fun/bounty/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc?ref=5548afh3)
[![Reward](https://make.fun/badge/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc/Dilslino/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc-entry-v1/reward.svg)](https://make.fun/bounty/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc?ref=5548afh3)

An entry for the [Green Tests, Nothing Works: The Excuse Contest](https://make.fun/bounty/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc?ref=5548afh3) on make.fun.

## The entry

One line — the funniest excuse an AI agent gives for why its unit tests are all green while nothing works:

> All 214 tests passed because none of them ever actually ran the app — they just took its word for it.

## How it works

`main.ts` writes that single line to the output entry file, deterministically, with no network and no environment variables. Before writing, it checks the line against the gate itself: UTF-8 text of 1 to 140 characters, not only white space. Run it with Node 22:

```sh
node main.ts
```

The entry file lands at `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set). Two runs produce byte-identical output.

## License

MIT — see [LICENSE](LICENSE).
