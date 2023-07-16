In this project, I've built a **Github Popular Repos** using React.

### Refer to the images below:

 <br/>
 <div style="text-align: center;">
     <img src="https://assets.ccbp.in/frontend/content/react-js/github-popular-repos-output.gif" alt="github popular repos output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
 </div>
 <br/>

**Failure View**

 <div style="text-align: center;">
     <img src="https://assets.ccbp.in/frontend/content/react-js/github-popular-repos-error-view-output.gif" alt="github popular repos failure view output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
 </div>
 <br/>

### Design Files on Different Devices

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/github-repos-sm-outputs.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Success](https://assets.ccbp.in/frontend/content/react-js/github-repos-lg-success-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Loading](https://assets.ccbp.in/frontend/content/react-js/github-repos-lg-loading-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Failure](https://assets.ccbp.in/frontend/content/react-js/github-repos-error-view-lg-output.png)

</details>

### Functionalities

<details>
<summary>Functionalities</summary>
<br/>

The app has the following functionalities

- When the app is opened initially,

  - An HTTP GET request is made to [**githubReposApiUrl**](https://apis.ccbp.in/popular-repos?language=ALL) with query parameter as `language` and its initial value as `ALL`
  - A Loader will be displayed while fetching the data
  - After the data is fetched successfully, the repositories list received in the response will be displayed

- When a language filter is active

  - An HTTP GET request will be made to **githubReposApiUrl** with the `id` of the active language as a query parameter
  - After the data is fetched successfully, the repositories list received in the response will be displayed

</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/stars-count-img.png](https://assets.ccbp.in/frontend/react-js/stars-count-img.png)
- [https://assets.ccbp.in/frontend/react-js/forks-count-img.png](https://assets.ccbp.in/frontend/react-js/forks-count-img.png)
- [https://assets.ccbp.in/frontend/react-js/issues-count-img.png](https://assets.ccbp.in/frontend/react-js/issues-count-img.png)
- [https://assets.ccbp.in/frontend/react-js/api-failure-view.png](https://assets.ccbp.in/frontend/react-js/api-failure-view.png)

</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #0284c7; width: 150px; padding: 10px; color: white">Hex: #0284c7</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #0f172a; width: 150px; padding: 10px; color: white">Hex: #0f172a</div>
<div style="background-color: #f8f8ff; width: 150px; padding: 10px; color: black">Hex: #f8f8ff</div>
<div style="background-color: #e73959; width: 150px; padding: 10px; color: white">Hex: #e73959</div>
<div style="background-color: #1e293b; width: 150px; padding: 10px; color: white">Hex: #1e293b</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto
- Lobster

</details>
