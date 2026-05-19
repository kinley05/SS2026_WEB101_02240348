# Reflection

## Introduction

This practical focused on connecting the TikTok frontend application developed using Next.js with the Express.js backend API. The practical involved implementing authentication, API integration, video management, and social interaction features such as following users and personalized feeds. Through this practical, I gained valuable experience in full-stack web application development and learned how frontend and backend systems communicate in a real-world application.


# Knowledge and Skills Gained

One of the main skills I developed during this practical was understanding how frontend applications communicate with backend servers through REST APIs. I learned how to use Axios to send HTTP requests and retrieve data from the backend efficiently.

I also gained practical knowledge about JWT-based authentication. I learned how tokens are generated after login, stored in local storage, and attached automatically to requests using Axios interceptors. This helped me understand how secure authentication systems work in modern web applications.

Another important concept I learned was state management using React Context API. By implementing the authentication context, I understood how user data and login states can be shared across multiple components without prop drilling.

Additionally, I improved my understanding of:
- Next.js routing and dynamic pages
- Component-based architecture
- API service organization
- Error handling and loading states
- Protected routes
- Full-stack project structure


# Challenges Faced

During the practical, I faced several challenges while integrating the frontend with the backend API. One of the biggest difficulties was handling authentication tokens correctly. At first, some API requests failed because the token was not being attached properly to request headers.

Another challenge was understanding asynchronous operations when fetching data from the backend. Sometimes components rendered before the data was fully loaded, which caused errors or empty displays. I solved this by using loading states and React hooks such as `useEffect`.

Managing the follow/unfollow functionality and updating the user interface dynamically was also challenging. It required careful handling of frontend state and backend responses to ensure the UI updated correctly after user actions.

Debugging API errors and ensuring correct endpoint usage also took time, but it helped improve my troubleshooting skills.


# Practical Experience

This practical gave me hands-on experience working with a complete full-stack application. I learned how frontend and backend technologies work together to create dynamic and interactive web applications.

I was able to:
- Configure API communication
- Implement user authentication
- Fetch and display real data from the backend
- Create reusable components
- Implement personalized feeds
- Build dynamic profile pages
- Handle video interactions such as likes and follows

The project also improved my ability to organize code into services, components, and contexts for better maintainability and scalability.


# Importance of the Practical

This practical was important because it simulated the development process used in real-world applications. Social media platforms such as TikTok rely heavily on frontend-backend communication, authentication systems, and dynamic content rendering.

By completing this practical, I developed a stronger understanding of modern web development technologies and gained confidence in building full-stack applications.

The experience also strengthened my problem-solving abilities and debugging skills, which are essential for software development.



# Conclusion

Overall, this practical was highly valuable and educational. It allowed me to apply theoretical concepts in a practical environment and improved my understanding of frontend-backend integration. I gained experience working with Next.js, Express.js, Prisma ORM, Axios, and JWT authentication while building a functional TikTok-style application.

Although there were challenges during implementation, solving them helped improve my technical skills and understanding of full-stack development. This practical has prepared me for developing more advanced web applications in the future.