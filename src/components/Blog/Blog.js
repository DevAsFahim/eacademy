import React from 'react';
import './Blog.css';
import corsImg from '../../assets/image/cors.png';
import firebaseImg from '../../assets/image/firebase.png';
import nodeImg from '../../assets/image/node.png';
import privateImg from '../../assets/image/private.jpg';


const Blog = () => {
    return (
        <div className="blog_container">
            <div className="page_banner">
                <h1>Blog</h1>
            </div>
            <div className="container">
                <div className="box-container">
                    <div className="blog">
                        <h1 className="blog_title">1. what is cors?</h1>
                        <div className="blog_image">
                            <img src={corsImg} alt="" />
                        </div>
                        <p className="blog_text mt-4">As you've possibly already come across by now, CORS is an acronym for Cross-Origin Resource Sharing, but what does that actually mean? What is CORS? Well, if we go by the Wikipedia definition, "[CORS] is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served," then you'd be forgiven if you were more confused than before you'd read that sentence. Before we get into defining CORS, it's best to know what came before, as it still defines the default behavior and is probably why you're reading this now. This precursor to CORS was called the "Same-Origin" policy. In short, it dictates that when your browser loads a script (like a button handler, or some async widget) from a particular (sub)domain that the script can only make requests to the (sub)domain that it originated from. This preflight request uses the HTTP method OPTIONS and has several HTTP headers that we'll go into detail on later. The external web server should then validate these preflight request headers to ensure that scripts from that origin are allowed to make the actual request to the resource using the nominated request method and custom request headers specified in the preflight request headers.</p>
                    </div>
                    <div className="blog">
                        <h1 className="blog_title">2. Why are you using firebase? What other options do you have to implement authentication?</h1>
                        <div className="blog_image">
                            <img src={firebaseImg} alt="" />
                        </div>
                        <p className="blog_text mt-4">Firebase is an app development platform that helps you build and grow apps and games users love. Backed by Google and trusted by millions of businesses around the world. The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. there are so many alternative of firebase such as MongoDB, Oracle Database Amazon Redshift, DataStax Enterprise, Redis Enterprise Cloud, Cloudera Enterprise Data Hub, Db2, Couchbase Server etc.</p>
                    </div>
                    <div className="blog">
                        <h1 className="blog_title">3. How does the private route work?</h1>
                        <div className="blog_image">
                            <img src={privateImg} alt="" />
                        </div>
                        <p className="blog_text mt-4">The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated. Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application. We will start off with a minimal React project that uses React Router to navigate a user from one page to another page. In the following function component, we have matching Link and Route components from React Router for various routes. Furthermore, we have a so-called Index Route loaded with the Landing component and a so-called No Match Route loaded with inline JSX. Both act as fallback routes.</p>
                    </div>
                    <div className="blog">
                        <h1 className="blog_title">4. What is Node? How does Node work?</h1>
                        <div className="blog_image">
                            <img src={nodeImg} alt="" />
                        </div>
                        <p className="blog_text mt-4">Node is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. Although there were other projects to bring JavaScript to server-side applications, the functionality took off with the launch of Node.js in 2009. Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.Node.js is written in C, C++, and JavaScript, and it is built on the open-source V8 JavaScript engine which also powers JS in browsers such as Google Chrome. As V8 supports new features in JavaScript, they are incorporated into Node.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;