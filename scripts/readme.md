# Meteor-react-redux

This is a very simple Meteor app showing how to connect meteor, react and redux.

## Installation

1. Install Docker
2. Install Meteor

## Run

1. Run the following command to get the MongoDB running with Docker.
```
bash scripts/dev/mongo_start.sh
```

2. Load the initial data to the MongoDB with the following command.
```
bash scripts/dev/load_initData.sh
```

3. Run the following command to install npm packages
```
cd meteor-react-redux
meteor npm install
```

3. Run the application
```
cd meteor-react-redux
meteor npm run start
```
