#!/usr/bin/env bash

perl -i -pe "s/\.ts//g if /^(import|export).+\s+from\s+(\"|').+(\"|');?$/" dist/*.d.ts
