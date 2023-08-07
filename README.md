

### Testing Objectives

- Ability to set up a Redux and connect it with your React application
- Ability to use Redux, and Redux-Thunk, for storing and accessing application data, respectively
- Ability to use Authentication, for Private Routes
- Ability to get filtered data, using JSON-server

### Understanding Component Structure

- App
  - Navbar
  - MainRoutes
    - Path: “/”, Page: Watches (Public Route)<br/> - Filter.jsx<br/> - WatchCard.jsx
    - Path: “/login”, Page: Login (Public Route)
    - Path: “/watches/:id”, Page: SingleWatch (Protected Route/Page, accessible after logging in)

### Redux

- Store
  - AppReducer (logic related to watch data)
  - AuthReducer (logic related to user login/authentication)

**NOTE**: Redux is mandatory for this application

1. Use the provided ActionTypes and DO NOT change the initial state in the reducer file.
2. Some of the boilerplate is provided. You are expected to write all the other remaining parts (action-creators, reducer file logic, etc) to set up the redux store.
3. Make sure Redux is connected with your React application properly, and you have access to the Redux store data

### JSON Data:

- db.json file is included in the boilerplate zip file, with the initial watches data. **Do not overwrite/modify this data**

### Features to build:

1. The user should be able to fetch the watch data from the db.json file (using JSON-server, axios, Redux-thunk) and display the data when the application loads.
2. The data received from API calls should be stored in the Redux store.
3. Use the watch data from redux store to display in the Watches component.
4. ‘/watches/:id’ : “SingleWatch” is a protected route. Make sure that it is accessible only after logging in. Use https://reqres.in for login API.
5. Post `login`, the user should be redirected to the page, he was initially present, i.e<br/> - If the user went to the login page, from homepage(Watches), then after successful login he should be redirected to homepage(Watches)<br/> - If the user went to the login page, trying to access `SingleWatch`, then after successful login he should be redirected to `SingleWatch`
6. The user should be able to implement the filter functionality, based on the watches category.<br/> - The search params should be updated with change in filter category selection.<br/> - The data should reflect the selected filters. An API call with the filter/category params should be made to GET the watches data from db.json, using JSON-server<br/> - Also, ensure the selected filter/category persists even with page refresh.


- Only use the data present in the db.json file, and do not modify the data in the json file.
