# Bingooal Site

Backlog and planning is on the [scratchpad](https://docs.google.com/document/d/1Nm8U5Ps-frO2gH4oC9ejSEOQ1YWye_jQKSYWvCCqvWE)

Design and prototype on [Figma](https://www.figma.com/file/eIUDMqIvwqIK4vuG0sTlTp/Bingoal-UX?node-id=0%3A1)

## Tech Stack

- NextJS frontend and backend app monorepo
- [Typescript](https://www.typescriptlang.org/)
- Linting with [ESLint](https://eslint.org/), Formatting with [Prettier](https://prettier.io/)
- Testing with [Jest](https://jestjs.io/) and [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)
- AWS
- Using [API Football's V3 api](https://www.api-football.com/documentation-v3)

## How to use

- Use the `package.json` commands
- Set environment variables using a local `.env` file. This is gitignored. This includes an API key for API Football.
- To check how much of the allowance of an API Football api key we've used, sign in to the account that owns the key, and check the [Dashboard](https://dashboard.api-football.com/). To create a new key, you may have to sign up for a free account

## Deployment

1. Log in to the AWS account with your user
2. Go to IAM
3. Generate an Access key-pair
4. Add that to your local `.aws/credentials` file as an aws profile in
5. Make sure your terminal session is using that aws profile
6. run `yarn deploy`. (This might deploy a new stack, rather than overwriting the existing one. Not sure why)
