# single-page-symfony-vue

single-page-symfony-vue app dev env



## Setup Development Environment

- Clone this repo: `git clone git@github.com:dorjecurreli/single-page-symfony-vue.git`
- Move into it: `cd mock-symfony`
- Setup env: `cp .env.local .env`
- Setup docker compose: `cp docker-compose.local.yml docker-compose.yml`
- Start environment: `docker-compose up -d`
- Move into docker container: `docker exec - it single-page-symfony-vue bash`
- Change user: `su sindria`
- Install composer dependecies `composer install`

