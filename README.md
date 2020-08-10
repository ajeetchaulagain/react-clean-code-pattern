# react-better-data-management

I have created this project to demonstrate how a data/state in react components can be managed in a clean, maintainable way using the React Context API combined with custom hooks.

## Instructions on Running Project

This project uses Next.js as a React framework as it is simple to use and comes with a lot of features. To simulate the REST server for API calls, [json-server](https://github.com/typicode/json-server) is used.

## Running a Project

1. Clone this repo and cd to project root directory
2. Install required npm packages - `npm i`
3. Run the Next.js dev server - `npm run dev`
4. Run the json-server - `npm run json-server`

This will lunch your next.js application at port 3000 and json-server at port 4000 in your local machine. Browse [http://localhost:3000]([http://localhost:3000]) to view the application.

**Note**: The dummy data required to simulate REST server through json-server is extracted from https://randomuser.me/ and stored at `/data/db.json`

## Resources

- [Setting up Next.js Project](https://nextjs.org/docs/getting-started)
- [Configuring Tailwind CSS on NextJS project](https://statickit.com/guides/next-js-tailwind)
- [React Context API](https://reactjs.org/docs/context.html)
- [randomuser.me - free opensource api for generating random user](https://randomuser.me/)
- [json-server : Fake REST API simulator](https://github.com/typicode/json-server)

## Contribution

If you find any issues or improvement regarding the code please consider submitting the pull request.

## License

This project is open source and available under [MIT License](LICENSE)
