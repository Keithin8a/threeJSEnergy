# threeJSEnergy

A repository using a dataset about renewable energies and presented using ThreeJS

## Purpose

I wanted to learn [React Three Fibre](https://r3f.docs.pmnd.rs/getting-started/introduction). The concept is an educational website which would use data from a dataset online and present the aggregated data from this dataset in an interesting way that would make it memorable.

## Dataset

The dataset used is from https://www.kaggle.com/datasets/girumwondemagegn/dataset-for-renewable-energy-systems

## Caveats

Right now the project is not finished. The basic ideas are all there, I have an API backend setup that reads data from the csv and populates it in a sqlite database for querying. The API backend wasn't really a major thing to learn so when this started to take awhile I moved onto the frontend site.

The frontend site is built with a main menu page which displays 2 energy types to learn about.

Upon selecting an energy type you are taken to a page which displays a 3D model of what generates that renewable energy and the intention was to be able to select numbered datapoints around the model to discover facts that had been taken from the API. This part is just a demonstration of the proof of concept so is not using the API and does not have selectable datapoints. You can use your mouse to drag the camera around which shows that the HTML positioned in 3D space.

## Running the project

Everything can be ran from the root directory using the following scripts

- `npm run setup` : This will create the database for the server
- `npm run start:client` : This will start up the react project on http://localhost:5173/
- `npm run start:server` : This will start up the server on http://localhost:3000/

## Inspiration

When learning ThreeJS, I followed a tutorial which would display a 3D model of a helmet and it would have info points that you could hover over and it would tell you information about that part of the model. I thought that this would be a great way of representing data for an educational style website about renewable energy resources.

One of the things I liked about this project was how the info points would get occluded by the model, so would disappear of the part of the model associated wasn't visible, such as round the back.

I wanted to replicate this project to learn React Three Fibre.

Since React is built for apps, I also decided to add a home page which would use React Three Fibre to make it more interesting. The menu pages uses a `useFrame` hook to manipulate the camera based on the mouse's position. Given more time, I would have normalised the mouse position so I could make sure the camera movement wouldn't be changes when you was outside of the browser window.

## Final Thoughts

React Three Fibre combined with [drei](https://drei.docs.pmnd.rs/getting-started/introduction) is really powerful, it gives you access to a lot of features of ThreeJS by providing you with components that remove a lot of the repetative setup code.

I also really like the way it provides you with various hooks which give you access to the native three library so you have the flexibility to use a combination of both for more complicated scenes.
