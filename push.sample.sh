#!/usr/bin/env bash

get_time=$(date)

git add .
git commit -m "bash: ${get_time}"
git push https://username:password@github.com/mashirozx/sakura2.git
