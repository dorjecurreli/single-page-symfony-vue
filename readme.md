# Mock Symfony App

Mock Symfony app dev env



## Setup Development Environment

- Clone this repo: `git clone git@github.com:dorjecurreli/mock-symfony.git`
- Move into it: `cd mock-symfony`
- Setup env: `cp .env.local .env`
- Setup docker compose: `cp docker-compose.local.yml docker-compose.yml`
- Start environment: `docker-compose up -d`
- Move into docker container: `docker exec - it mock-symfony bash`
- Change user: `su sindria`
- Install composer dependecies `composer install`

