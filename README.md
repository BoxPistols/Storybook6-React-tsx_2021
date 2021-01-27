# Some notes

I find the official Storybook docs confusing, so this is meant as a learning, and minimal setup.

## Troubleshooting

It might help to **Restart Server** from time-to-time via the Server Control Panel on the left.

Also, could try opening a terminal (+) and `rm -rf node_modules` and restarting.

## CodeSandbox Container

On CodeSandbox, a Container Environment will automatically run the `start` script. Container environments are a little more finicky, and take longer to load than the normal Client environments.

For depenedencies on CodeSandbox, only the non-dev ones will appear in left panel. This makes it slightly harder to update devDependencies to the lastest version, as it is a more manual process throught package.json. Although, I think technically one could move devDepnedencies into the dependencides key on `package.json`.

## Storybook

Storybook is also a bit of hog and takes time

## TypeScript

There are always different ways to compose types with TypeScript.
