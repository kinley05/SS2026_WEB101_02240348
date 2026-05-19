# Reflection on Practical 3: File Upload Implementation

## Learning Experience
This practical gave me hands-on experience with building a complete **file upload system** in a Next.js application. I learned how frontend and backend components work together to handle multipart form data, validate files, track upload progress, and provide a user-friendly drag-and-drop interface.

## Technical Insights
- **Frontend Growth**: Using `react-hook-form` taught me how to manage form state and validation efficiently. Integrating `axios` for progress tracking helped me understand how to provide real-time feedback to users. Implementing `react-dropzone` expanded my skills in creating modern, intuitive interfaces.
- **Backend Growth**: Working with `formidable` showed me how to parse multipart form data correctly. Saving files to the server gave me a deeper understanding of how backend APIs interact with the filesystem.

## Challenges and Overcoming Them
- At first, I struggled with configuring `formidable` correctly in Next.js API routes. Debugging this issue taught me patience and the importance of reading documentation carefully.
- Implementing file validation required me to think about edge cases, such as restricting file types and sizes. This improved my attention to detail and ability to anticipate user behavior.
- Setting up progress tracking with `axios` was new to me, but once I understood how `onUploadProgress` works, I realized how valuable it is for enhancing user experience.

## Key Takeaways
- File uploads involve both **frontend validation** and **backend handling**, and both must be carefully designed.
- Real-time feedback (progress bars, drag-and-drop UI) significantly improves usability.
- Modern libraries like `react-hook-form`, `axios`, and `react-dropzone` simplify complex tasks, but they require practice to use effectively.

## Personal Growth Perspective
This assignment helped me grow beyond just writing code:
- **Confidence**: I now feel more capable of building full-stack features that combine frontend and backend logic.
- **Problem-Solving Mindset**: Debugging issues with file parsing and validation taught me to break problems into smaller steps and test incrementally.
- **Adaptability**: Learning new libraries pushed me out of my comfort zone and showed me the importance of embracing modern tools.
- **Resilience**: Each error I encountered became an opportunity to learn. Instead of feeling discouraged, I used challenges as stepping stones to improve my skills.

## Reflection
Overall, this practical was a valuable experience in building a feature that is common in real-world applications. It strengthened my technical foundation while also boosting my confidence and adaptability as a developer. I now see myself as someone who can not only implement functionality but also design user-friendly, efficient solutions.
