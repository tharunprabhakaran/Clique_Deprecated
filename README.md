# Clique

Clique is a school pupil management app for schools and parents to seamlessly share information about the pupil and gain more insights which was not possible before. Clique is work in progress for both iOS and Android.


# Features

 - ## School and Faculty
	 - Announcements
	 - Broadcast Messages
	 -  Attendance Management
	 - Time Table
	 - Assignments and Tasks
	 - Result Declarations
	 - Ticket Management
	 - Insights of Pupil
	 - Misconduct Report Management
	 - Pupil Accessories 
	 - Faculty Content Sharing
	 - Online Content and Contest
	 - Hall of Fame
 - ## Parents and Pupil
	 - Pupil Profile
	  - Pupil Insight Reports
	  - Pupil health companion
	 - Ticket Management
	 - Chat forum with Faculty
	 - Document Sharing
	 - Events Notification
	 - Attendance
	 - Misconduct Report 
	 - Curated Extra Curricular
	 - 	SOS Calls
	
	 

# Technical Stack

- ## Design
	**Clique** is completely being developed with **Microservices** architecture in focus. Each feature or combinations of features makes a service. Each service will be containerised using **Docker** and embraces orchestration using **Kubernetes** in future.
	Inter-service communication and Communication between frontend and backend will follow a custom specific schema known as **[Canister Object](https://github.com/tharunprabhakaran/Clique/blob/master/Assets/GeneralDocuments/canister.json)**
 - ## Frontend
	 **Clique** is an Mobile centric application focused for iOS and Android. Clique uses **Flutter 1.9** as the main base for the frontend as of today, because of its single codebase and almost native like performance. However Clique is not a resource intensive application, which led the decision of leaving the idea of Native application behind.
 - ## Backend
	 **Clique** development process is in need of rapid prototyping and delivery, hence during the search for a stack which is nimble enough to support the continues development/delivery cycle with the code base easily maintainable and huge developer community, we found **Node.js** as our go to platform. As of today we are developing using **Express.js** with **MongoDB** as our master database, but we are heavily experimenting with **Restify** which could help us in removing certain overheads that Express.js imposes.


