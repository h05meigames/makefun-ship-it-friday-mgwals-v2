# Ship It Friday

[![make.fun](https://make.fun/badge/u-mgwals-ship-it-friday-30bd407a.svg)](https://make.fun/bounty/u-mgwals-ship-it-friday-30bd407a)
[![rank](https://make.fun/badge/u-mgwals-ship-it-friday-30bd407a/h05meigames/makefun-ship-it-friday-mgwals-v2/rank.svg)](https://make.fun/bounty/u-mgwals-ship-it-friday-30bd407a)
[![reward](https://make.fun/badge/u-mgwals-ship-it-friday-30bd407a/h05meigames/makefun-ship-it-friday-mgwals-v2/reward.svg)](https://make.fun/bounty/u-mgwals-ship-it-friday-30bd407a)

Entry for the [Ship It Friday](https://make.fun/bounty/u-mgwals-ship-it-friday-30bd407a) bounty on [make.fun](https://make.fun/r/0ene8b3q): a program that writes the funniest one-line git commit message an AI coding agent writes right before breaking production on a Friday.

## Entry

```text
fix: Mondays kept causing outages, so I deleted Monday from the calendar — zero Monday incidents since, deploying Friday 4:59 PM, see you Tuesday
```

The revised line (final commit): the draft's "deleted the prod database" joke was dropped because that disaster is the most common joke in the bounty. Deleting Monday keeps the same cheerful, oblivious AI-agent voice — setup, absurd fix, fake-metric brag, Friday 4:59 PM stamp, "see you Tuesday" punch — in a lane nobody else is standing in.

## Run

```sh
node main.ts
```

Writes the entry to `${MAKEFUN_OUTPUT_DIR:-/output}/entry.txt` and prints it to stdout, with a read-back verification that the file matches.

## License

MIT
