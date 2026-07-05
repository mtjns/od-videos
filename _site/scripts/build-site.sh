#!/usr/bin/env bash
set -euo pipefail

site_env="${SITE_ENV:-local}"

case "$site_env" in
  github|github-project)
    config_files="_config.yml,_config.github.yml"
    ;;
  github-domain|custom|local)
    config_files="_config.yml"
    ;;
  *)
    config_files="_config.yml"
    ;;
esac

bundle exec jekyll build --config "$config_files"