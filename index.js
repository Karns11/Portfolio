const { useRef } = React;
const emailjs = window.emailjs;


function App() {
    return (
        <div>
            <Navbar />
            <Showcase />
            <Projects />
            <Experience />
            <Contactpage />
            <Footer />
        </div>
    )
}


function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg bg-dark navbar-dark py-4 fixed-top w-100'>
            <div className="container navbar-container">
                <a href='#Showcase' className='navbar-brand brand'>Nathans Portfolio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='collapse navbar-collapse' id="navmenu">
                    <ul className='navbar-nav ml-auto'>
                        <li className='nav-item px-3'>
                            <a href='#Projects' className='nav-link'>Projects</a>
                        </li>
                        <li className='nav-item px-3'>
                            <a href='#Experience' className='nav-link'>Experience</a>
                        </li>
                        <li className='nav-item px-3'>
                            <a href='#Contact' className='nav-link'>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

function Showcase() {
    return (
        <section id='Showcase' className="bg-dark text-light p-5 text-center text-sm-start">
            <div className="container py-5">
                <div className="d-sm-flex align-items-center justify-content-between">
                    <div>
                        <div className='typing-text'>
                            <h1>Aspiring <span className="text-warning">Developer</span></h1>
                        </div>
                        <div>
                            <p className="lead my-5 slide-in-text-left">Welcome to my portfolio! As a business student with a newfound passion for programming, I am an aspiring developer constantly seeking new challenges. I'm excited to share my journey and projects on this platform with you.</p>
                        </div>
                    </div>
                    <img className='img-fluid w-50 d-none d-sm-block slide-in-text' src="developer.svg" alt="developer" />
                </div>
            </div>
        </section>
    )
}

function Projects() {
    return (
        <section id='Projects' className="bg-light p-5">
            <div className='container text-center'>
                <h2 className='mb-4 fw-bold slide-in-text'>Projects</h2>
                <div className='row row-cols-2 text-center'>
                    <div className='col my-5'>
                        <a href="https://karns11.github.io/Tic-Tac-Toe/" target="_blank"><img src="source_code.svg" className='img-fluid d-none d-md-block my-5 px-3' /></a>
                    </div>

                    <div className='col d-none d-md-block my-5'>
                        <h3>Tic-Tac-Toe</h3>
                        <p className='text-start'>I recently completed a passion project where I built a Tic Tac Toe game using React, which allowed me to enhance my skills as a developer. 
                        The classic two-player game features a 3x3 board where players take turns marking X's or O's until one player gets three in a row, either horizontally, vertically, or diagonally.
                        My Tic Tac Toe game features a responsive design, which means it works seamlessly on any device, including desktops, tablets, and mobile phones.
                        The game also includes an interactive scoreboard that tracks the number of wins, losses, and draws for each player, making it more engaging for players.
                        Overall, my Tic Tac Toe game showcases my skills as a React developer and offers an interactive and fun way for players to challenge their friends and family.</p>
                        <h5 className='pt-1'>Skills used:</h5>
                        <div>
                            <a><i className='fab fa-html5 px-3'></i></a>
                            <a><i className='fab fa-js-square px-3'></i></a>
                            <a><i className='fab fa-react px-3'></i></a>
                            <a><i className='fab fa-css3 px-3'></i></a>
                        </div>
                    </div>

                    <div className='col d-none d-md-block my-5'>
                        <h3>JavaScript Calculator</h3>
                        <p className='text-start'>My powerful JavaScript calculator can handle all kinds of calculations, from simple arithmetic to more complex functions. It's a tool that I designed with inspiration from the Apple calculator app, which I've always found to be intuitive and user-friendly. 
                        The calculator is continuously updated to improve its functionality and add new features, 
                        such as the ability to handle more complex equations and customize its appearance. Creating this calculator was both challenging and rewarding as it showcases my development skills. It's exciting to develop a calculator that is versatile, easy to use, and aesthetically pleasing. 
                        I am proud of the work I've done on this calculator and look forward to continuing to refine and enhance it as my skills as a developer grow.</p>
                        <h5 className='pt-1'>Skills used:</h5>
                        <div>
                            <a><i className='fab fa-html5 px-3'></i></a>
                            <a><i className='fab fa-js-square px-3'></i></a>
                            <a><i className='fab fa-react px-3'></i></a>
                            <a><i className='fab fa-css3 px-3'></i></a>
                        </div>
                    </div>

                    <div className='col my-5'>
                        <a href="https://karns11.github.io/Javascript-Calculator/" target="_blank"><img src="calc.svg" className='img-fluid d-none d-md-block my-5 px-3' /></a>
                    </div>

                    <div className='col my-5'>
                        <a href="https://karns11.github.io/To-Do-list/" target="_blank"><img src="todo.svg" className='img-fluid d-none d-md-block my-5 px-3' /></a>
                    </div>

                    <div className='col d-none d-md-block my-5'>
                        <h3>To-Do List</h3>
                        <p className='text-start'>This is my first attempt at a project using Javascript. The to-do list project is a web application that enables users to create and manage a list of tasks. It was built using self-taught HTML, CSS, and JavaScript skills that I learned as a result of working through various courses on Freecodecamp.com.
                        The user interface of the to-do list is intuitive and user-friendly, with a simple form where users can add tasks and a display area that shows all tasks that have been added. Tasks can be marked as completed or deleted as needed, providing a flexible and customizable experience for users.
                        The to-do list project showcases the power of JavaScript for creating dynamic web applications. 
                        With its event-driven architecture and ability to manipulate the DOM, JavaScript makes it possible to create a highly interactive user interface that responds to user input in real-time. Overall, 
                        the to-do list project is a useful and practical application of HTML, CSS, and JavaScript that demonstrates the power and flexibility of these web technologies.</p>
                        <h5 className='pt-1'>Skills used:</h5>
                        <div>
                            <a><i className='fab fa-html5 px-3'></i></a>
                            <a><i className='fab fa-js-square px-3'></i></a>
                            <a><i className='fab fa-css3 px-3'></i></a>
                        </div>
                    </div>

                    <div className='col d-none d-md-block my-5'>
                        <h3>Klondike Solitaire Game</h3>
                        <p className='text-start'>This project focuses on the design, implementation and testing of a Python program which
                        uses a module to play a card game, Klondike Solitaire. The game is played by one person
                        with a standard 52-card deck of playing cards. The goal of the game is to build four foundations
                        (one for each of the four suits), where all of the cards in each foundation are in order from Ace to
                        King (with the Ace on the bottom). The following website has an on-line version of Klondike (Turn One) and a short video
                        introduction to the game: <a href="https://worldofsolitaire.com/" target="_blank">http://worldofsolitaire.com/</a>. Note that the game rules used for this project are simpler than the rules discussed on the website.
                        Notably, the online game allows a multi-card pile to be moved between columns of the tableau—
                        this project only allows one card at a time to be moved.</p>
                        <h5 className='pt-1'>Skills used:</h5>
                        <div>
                            <a><i className='fab fa-python'></i></a>
                        </div>
                    </div>

                    <div>
                        <a href="https://github.com/Karns11/solitaire_game" target="_blank"><img src="solitaire.svg" className='img-fluid d-none d-md-block my-5 px-3' /></a>
                    </div>

                    <div>
                        <a href="https://karns11.github.io/Markdown-Previewer/" target="_blank"><img src="previewer.svg" className='img-fluid d-none d-md-block my-5 px-3' /></a>
                    </div>

                    <div className='col d-none d-md-block my-5'>
                        <h3>Markdown Previewer</h3>
                        <p className='text-start'>The markdown previewer project is a web application that I built using React and Bootstrap that allows users to input markdown text and see it rendered in real-time.
                        These are self-taught skills that I learned as a result of working through various courses on Freecodecamp.com.
                        It has robust markdown parsing capabilities, including handling complex markdown syntax, such as headings, lists, tables, and code blocks. The interface is designed with simplicity and ease-of-use in mind, and the layout is fully responsive for optimal viewing on any device.
                        The project demonstrates how React and Bootstrap can be used together to create a high-quality, 
                        feature-rich web application that is an excellent tool for quickly and easily converting markdown to HTML.</p>
                        <h5 className='pt-1'>Skills used:</h5>
                        <div>
                            <a><i className='fab fa-html5 px-3'></i></a>
                            <a><i className='fab fa-js-square px-3'></i></a>
                            <a><i className='fab fa-react px-3'></i></a>
                            <a><i className='fab fa-css3 px-3'></i></a>
                        </div>
                    </div>

                    <div className='col d-none d-md-block my-5'>
                        <h3>NBA Game Predictor</h3>
                        <p className='text-start'>This passion project encompasses my passion for sports and programming, as I created an NBA game predictor model using Python. The project is a work in progress that involves the use of several powerful Python libraries, including Beautifulsoup and Scikit-learn.
                        To build the NBA game predictor, I used Beautifulsoup to scrape data from various websites, such as Basketball Reference. This data was then processed and analyzed using Python and the Pandas library. The data was split using the sklearn library, which allowed me to train the model and make predictions.
                        One of the key challenges in building an NBA game predictor model is the large amount of data involved. However, with the help of Python and its libraries, I was able to efficiently process and analyze the data to make accurate predictions.
                        Overall, the NBA game predictor project is an exciting application of Python for sports enthusiasts and data scientists alike. 
                        While it is still a work in progress, the project demonstrates the power and flexibility of Python for data analysis and machine learning.</p>
                        <h5 className='pt-1'>Skills used:</h5>
                        <div>
                            <a><i className='fab fa-python'></i></a>
                        </div>
                    </div>

                    <div>
                        <a href="https://github.com/Karns11/NBA-predictor" target="_blank"><img src="nba.svg" className='img-fluid d-none d-md-block my-5 px-3' /></a>
                    </div>
                </div>


                <div className='row row-cols-1 text-center'>
                    <div className='col d-md-none d-block mb-5'>
                        <a className='small-link' href='https://karns11.github.io/Tic-Tac-Toe/' target='_blank'><h3>Tic-Tac-Toe</h3></a>
                        <p className='text-center'>I recently completed a passion project where I built a Tic Tac Toe game using React, which allowed me to enhance my skills as a developer. 
                        The classic two-player game features a 3x3 board where players take turns marking X's or O's until one player gets three in a row, either horizontally, vertically, or diagonally.
                        My Tic Tac Toe game features a responsive design, which means it works seamlessly on any device, including desktops, tablets, and mobile phones.
                        The game also includes an interactive scoreboard that tracks the number of wins, losses, and draws for each player, making it more engaging for players.
                        Overall, my Tic Tac Toe game showcases my skills as a React developer and offers an interactive and fun way for players to challenge their friends and family.</p>
                        <h5 className='pt-1'>Skills used:</h5>
                        <div>
                            <a><i className='fab fa-html5 px-3'></i></a>
                            <a><i className='fab fa-js-square px-3'></i></a>
                            <a><i className='fab fa-react px-3'></i></a>
                            <a><i className='fab fa-css3 px-3'></i></a>
                        </div>
                    </div>

                    <div className='col d-md-none d-block my-5'>
                        <a className='small-link' href='https://karns11.github.io/Javascript-Calculator/' target='_blank'><h3>JavaScript Calculator</h3></a>
                        <p className='text-center'>My powerful JavaScript calculator can handle all kinds of calculations, from simple arithmetic to more complex functions. It's a tool that I designed with inspiration from the Apple calculator app, which I've always found to be intuitive and user-friendly. 
                        The calculator is continuously updated to improve its functionality and add new features, 
                        such as the ability to handle more complex equations and customize its appearance. Creating this calculator was both challenging and rewarding as it showcases my development skills. It's exciting to develop a calculator that is versatile, easy to use, and aesthetically pleasing. 
                        I am proud of the work I've done on this calculator and look forward to continuing to refine and enhance it as my skills as a developer grow.</p>
                        <h5 className='pt-1'>Skills used:</h5>
                        <div>
                            <a><i className='fab fa-html5 px-3'></i></a>
                            <a><i className='fab fa-js-square px-3'></i></a>
                            <a><i className='fab fa-react px-3'></i></a>
                            <a><i className='fab fa-css3 px-3'></i></a>
                        </div>
                    </div>

                    <div className='col d-md-none d-block my-5'>
                        <a className='small-link' href='https://karns11.github.io/To-Do-list/' target='_blank'><h3>To-Do List</h3></a>
                        <p className='text-center'>This is my first attempt at a project using Javascript. The to-do list project is a web application that enables users to create and manage a list of tasks. It was built using self-taught HTML, CSS, and JavaScript skills that I learned as a result of working through various courses on Freecodecamp.com.
                        The user interface of the to-do list is intuitive and user-friendly, with a simple form where users can add tasks and a display area that shows all tasks that have been added. Tasks can be marked as completed or deleted as needed, providing a flexible and customizable experience for users.
                        The to-do list project showcases the power of JavaScript for creating dynamic web applications. With its event-driven architecture and ability to manipulate the DOM, JavaScript makes it possible to create a highly interactive user interface that responds to user input in real-time.
                        Overall, the to-do list project is a useful and practical application of HTML, CSS, and JavaScript that demonstrates the power and flexibility of these web technologies.</p>
                        <h5 className='pt-1'>Skills used:</h5>
                        <div>
                            <a><i className='fab fa-html5 px-3'></i></a>
                            <a><i className='fab fa-js-square px-3'></i></a>
                            <a><i className='fab fa-css3 px-3'></i></a>
                        </div>
                    </div>

                    <div className='col d-md-none d-block my-5'>
                        <a className='small-link' href='https://github.com/Karns11/solitaire_game' target='_blank'><h3>Klondike Solitaire Game</h3></a>
                        <p className='text-center'>This project focuses on the design, implementation and testing of a Python program which
                        uses a module to play a card game, Klondike Solitaire. Klondike is one of the most popular solitaire card games. The game is played by one person
                        with a standard 52-card deck of playing cards. The goal of the game is to build four foundations
                        (one for each of the four suits), where all of the cards in each foundation are in order from Ace to
                        King (with the Ace on the bottom). The following website has an on-line version of Klondike (Turn One) and a short video
                        introduction to the game: <a href="https://worldofsolitaire.com/" target="_blank">http://worldofsolitaire.com/</a>. Note that the game rules used for this project are simpler than the rules discussed on the website.
                        Notably, the online game allows a multi-card pile to be moved between columns of the tableau—
                        this project only allows one card at a time to be moved.</p>
                        <h5 className='pt-1'>Skills used:</h5>
                        <div>
                            <a><i className='fab fa-python'></i></a>
                        </div>
                    </div>

                    <div className='col d-md-none d-block my-5'>
                        <a className='small-link' href='https://karns11.github.io/Markdown-Previewer/' target='_blank'><h3>Markdown Previewer</h3></a>
                        <p className='text-center'>The markdown previewer project is a web application that I built using React and Bootstrap that allows users to input markdown text and see it rendered in real-time.
                        These are self-taught skills that I learned as a result of working through various courses on Freecodecamp.com.
                        It has robust markdown parsing capabilities, including handling complex markdown syntax, such as headings, lists, tables, and code blocks. The interface is designed with simplicity and ease-of-use in mind, and the layout is fully responsive for optimal viewing on any device.
                        The project demonstrates how React and Bootstrap can be used together to create a high-quality, 
                        feature-rich web application that is an excellent tool for quickly and easily converting markdown to HTML.</p>
                        <h5 className='pt-1'>Skills used:</h5>
                        <div>
                            <a><i className='fab fa-html5 px-3'></i></a>
                            <a><i className='fab fa-js-square px-3'></i></a>
                            <a><i className='fab fa-react px-3'></i></a>
                            <a><i className='fab fa-css3 px-3'></i></a>
                        </div>
                    </div>

                    <div className='col d-md-none d-block my-5'>
                        <a className='small-link' href='https://github.com/Karns11/NBA-predictor' target='_blank'><h3>NBA Game Predictor</h3></a>
                        <p className='text-center'>This passion project encompasses my passion for sports and programming, as I created an NBA game predictor model using Python. The project is a work in progress that involves the use of several powerful Python libraries, including Beautifulsoup and Scikit-learn.
                        To build the NBA game predictor, I used Beautifulsoup to scrape data from various websites, such as Basketball Reference. This data was then processed and analyzed using Python and the Pandas library. The data was split using the sklearn library, which allowed me to train the model and make predictions.
                        One of the key challenges in building an NBA game predictor model is the large amount of data involved. However, with the help of Python and its libraries, I was able to efficiently process and analyze the data to make accurate predictions.
                        Overall, the NBA game predictor project is an exciting application of Python for sports enthusiasts and data scientists alike. 
                        While it is still a work in progress, the project demonstrates the power and flexibility of Python for data analysis and machine learning.</p>
                        <h5 className='pt-1'>Skills used:</h5>
                        <div>
                            <a><i className='fab fa-python'></i></a>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

function Experience() {
    return (
        <section id='Experience' className='bg-light p-5'>
            <div className='container text-center mb-3'>
                <h2 className='fw-bold'>Experience</h2>
            </div>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            McNaughton-McKay
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <h4><em>Data Analytics Intern</em></h4>
                            <h6>May 2022 - Aug 2022</h6>
                            <p className='mb-0 pl-1'>•	Developed an application to automate current processes for price checking which led to an increase in time efficiency for the sales team and more accurate pricing</p>
                            <p className='mb-0 pl-1'>•	Collaborated with Market Data Analytics team members to conduct data analysis and share proposals through a combination of data visualization reports and presentations backed by data and coupled with actionable conclusions</p>
                            <p className='mb-0 pl-1'>•	Mined, cleaned, and interpreted internal and external data sources using data analytics software’s like SQL and Alteryx to support business objectives</p>
                            <p className='mb-0 pl-1'>•	Assisted with ongoing collaboration between corporate marketing, regional sales and engineering teams and manufacturer partners</p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Ripplematch
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <h4><em>Leadership Development Intern</em></h4>
                            <h6>Feb 2022 - May 2022</h6>
                            <p className='mb-0 pl-1'>•	Selected from a pool of thousands of candidates to work closely with leaders of RippleMatch’s Leadership Team</p>
                            <p className='mb-0 pl-1'>•	Leveraged various growth strategies and tools including social media, email marketing, presentations, and peer and faculty member networking to grow the user base and awareness on campus</p>
                            <p className='mb-0 pl-1'>•	Strategically assessed growth and performance metrics to improve, change and/or help design new growth</p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Spartan Analytics Consulting Group
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <h4><em>Analyst</em></h4>
                            <h6>Sept 2022-Present</h6>
                            <p className='mb-0 pl-1'>•	Selected to be a part of, and lead, a client engagement team focused on providing business solutions, to local companies, using analytics</p>
                            <p className='mb-0 pl-1'>•	Analyze data to identify trends and patterns, develop statistical models, and provide recommendations for process improvement </p>
                            <p className='mb-0 pl-1'>•	Develop predictive models using various techniques including regression analysis and time series modeling in Python and R</p>
                            <p className='mb-0 pl-1'>•	Communicate with the client regularly and present findings using data visualization tools like Tableau</p>
                        </div>
                    </div>
                </div>
</div>
        </section>
    )
}

function Contactpage() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('service_965e8b9', 'template_r4ybnou', form.current, 'o-y_5neqNasZHuGbk')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <section id='Contact' className="bg-secondary text-dark p-5">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between bg-light p-3" style={{borderRadius: '8px'}}>
                    <div className="w-50">
                        <div className='text-light'>
                            <h3 className='fw-bold text-dark'>Say Hello!</h3>
                        </div>

                        <form ref={form} onSubmit={sendEmail}>
                            <div className="form-floating mb-3 contact-input">
                                <input type="text" name="user_name" id="name" className="form-control" placeholder="Enter Name" />
                                <label for="name" class="form-label">Name</label>
                            </div>
                            
                            <div className="form-floating mb-3 contact-input">
                                <input type="email" name="user_email" id="email" className="form-control" placeholder="Enter Email" />
                                <label for="email" className="form-label">Email</label>
                            </div>

                            <div className="form-floating mb-3 contact-input">
                                <input type="text" name='subject' id="subject" className="form-control" placeholder="Enter Subject" />
                                <label>Subject</label>
                            </div>
                        
                            <div className="form-floating mb-3 contact-input">
                                <textarea id='message' className='textarea form-control' placeholder='Enter Message' name="message" style={{height: "175px"}} />
                                <label for="message" className="form-label">Message</label>
                            </div>
                            
                            <button className="btn btn-warning" type='submit'>Submit</button>
                        </form>

                    </div>
                    <img class='img-fluid w-50 d-none d-md-block contact-img' src="email.svg" alt="contact me" />
                </div>

                <div className='row pt-5 text-center'>
                    <div className='col'>
                        <a href='https://twitter.com/karnsnathan11' target='_blank' className='btn ml-3'><i className='fab fa-twitter text-light icon'></i></a>
                    </div>
                    <div className='col'>
                        <a href='https://github.com/karns11' target='_blank' className='btn ml-3'><i className='fab fa-github text-light icon'></i></a>
                    </div>
                    <div className='col'>
                        <a href='https://www.linkedin.com/in/nathan-karns-63820a216/' target='_blank' className='btn ml-3'><i className='fab fa-linkedin text-light icon'></i></a>
                    </div>
                    <div className='col'>
                        <a href='https://instagram.com/karnsnathan11' target='_blank' className='btn ml-3'><i className='fab fa-instagram text-light icon'></i></a>
                    </div>
                </div>

            </div>
        </section>
    )
}

function Footer() {
    return (
        <section className='bg-secondary'>
            <div className='container pb-3 pt-0'>
                <div className='row text-center'>
                    <div className='col'>
                        <a href="tel:+12482100166" target='_blank' className='btn icon'>
                            <i className="fas fa-phone me-2 text-light"></i>
                            <span className='text-light'>+1 (248) 210-0166</span>
                        </a>
                    </div>
                    <div className='col'>
                        <a href="mailto:karnsnat@msu.edu" target='_blank' className='btn icon'>
                            <i className="fas fa-envelope me-2 text-light"></i>
                            <span className='text-light'>Karnsnat@msu.edu</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
