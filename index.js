function App() {
    return (
        <div>
            <Navbar />
            <Showcase />
            <Projects />
            <Experience />
            <Contactpage />
        </div>
    )
}


function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg bg-dark navbar-dark py-4 fixed-top'>
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
                        <h1>Aspiring <span className="text-warning">Developer</span></h1>
                        <p className="lead my-5">Welcome to my portfolio! As a business student with a newfound passion for programming, I am an aspiring developer constantly seeking new challenges. I'm excited to share my journey and projects on this platform with you.</p>
                    </div>
                    <img className='img-fluid w-50 d-none d-sm-block' src="developer.svg" alt="developer" />
                </div>
            </div>
        </section>
    )
}

function Projects() {
    return (
        <section id='Projects' className="bg-light p-5">
            <div className='container text-center'>
                <h2 className='mb-5 fw-bold'>Projects</h2>
                <div className='row row-cols-2 text-center'>
                    <div className='col my-5'>
                        <a href="https://karns11.github.io/To-Do-list/" target="_blank"><img src="todo.svg" className='img-fluid d-none d-sm-block' /></a>
                    </div>

                    <div className='col my-5'>
                        <h3>To-Do List</h3>
                        <p>This is my first attempt at a project using Javascript. I decided to make a To-Do list. This project was really fun for me and I am really exited to see how it turned out.
                        Since this is my first javascript project, I did not use any local storage. I am currently in the process of developing a new and improved version that incorporates the use
                        of local storage. I was really happy with how the buttons turned out, specifically the edit and delete buttons. Each button has a hover effect that is really cool as well. 
                        As a result, I have become more comfortable with HTML, CSS, and Javascript.</p>
                    </div>

                    <div className='col my-5'>
                        <h3>Klondike Solitaire Game</h3>
                        <p>This assignment focuses on the design, implementation and testing of a Python program which
                        uses a module to play a card game, Klondike Solitaire. Klondike is one of the most popular solitaire card games. The game is played by one person
                        with a standard 52-card deck of playing cards. The goal of the game is to build four foundations
                        (one for each of the four suits), where all of the cards in each foundation are in order from Ace to
                        King (with the Ace on the bottom). The following website has an on-line version of Klondike (Turn One) and a short video
                        introduction to the game: <a href="https://worldofsolitaire.com/" target="_blank">http://worldofsolitaire.com/</a>. Note that the game rules used for this project are simpler than the rules discussed on the website.
                        Notably, the online game allows a multi-card pile to be moved between columns of the tableau—
                        this project only allows one card at a time to be moved.</p>
                    </div>

                    <div>
                        <a href="https://github.com/Karns11/solitaire_game" target="_blank"><img src="solitaire.svg" className='img-fluid d-none d-sm-block' /></a>
                    </div>

                    <div>
                        <a href="https://github.com/Karns11/Penguin" target="_blank"><img src="movie.svg" className='img-fluid d-none d-sm-block' /></a>
                    </div>

                    <div className='col my-5'>
                        <h3>Python Movie Project</h3>
                        <p>This assignment focuses on the design, implementation, and testing of a Python program that uses
                        lists and tuples. The GroupLens Research Project at the University of Minnesota has gathered a dataset from the
                        MovieLens website recording the ratings provided by different users on different movies on a
                        scale of 1-5. Here, I write a Python program that uses the MovieLens dataset to answer questions like the
                        highest average rated movies in a year, specific genre, by a specific gender (male or female), or a
                        specific profession (occupational group).</p>
                    </div>

                    <div className='col my-5'>
                        <h3>NBA Game Predictor</h3>
                        <p>This project is my first attempt at an NBA game predictor model. I used the BeautifulSoup python package in order to scrape Basketballreference.com.
                        I split the data into two different categories: Train and Test. I trained my model on 80% of the data and used the other category in order to have my model 
                        use the data to prdict winners. This is a completely self-taught skill, and I am super happy to see this idea come to fruition. Down the road, I want to be able to use the 
                        data I collected in order to be able to predict future NBA games, and then see how accurate the model is.</p>
                    </div>

                    <div>
                        <a href="https://github.com/Karns11/NBAWebScraping" target="_blank"><img src="nba.svg" className='img-fluid d-none d-sm-block' /></a>
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


    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [subject, setSubject] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [isRequired, setIsRequired] = React.useState(true)

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    const handleChangeMessage = (e) => {
        setMessage(e.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault();
        // Submit the form data to your server here...
      };


    return (
        <section id='Contact' class="bg-secondary text-dark p-5">
            <div class="container">
                <div class="d-flex align-items-center justify-content-between bg-light p-3" style={{borderRadius: '8px'}}>
                    <div class="w-50">
                        <div className='text-light'>
                            <h3 className='fw-bold text-dark'>Say Hello!</h3>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div class="form-floating mb-3 contact-input">
                                <input type="text" id="name" class="form-control" placeholder="Enter Name" value={name} onChange={handleChangeName} required={isRequired} />
                                <label for="name" class="form-label">Name</label>
                            </div>

                            <div class="form-floating mb-3 contact-input">
                                <input type="email" id="email" class="form-control" placeholder="Enter Email" value={email} onChange={handleChangeEmail} required={isRequired} />
                                <label for="email" class="form-label">Email</label>
                            </div>

                            <div class="form-floating mb-3 contact-input">
                                <input type="text" id="subject" class="form-control" placeholder="Enter Subject" value={subject} onChange={handleChangeSubject} required={isRequired} />
                                <label for="subject" class="form-label">Subject</label>
                            </div>

                            <div class="form-floating mb-3 contact-input">
                                <textarea name='text' id='message' className='textarea form-control' placeholder='Enter Message' style={{height: "175px"}} value={message} onChange={handleChangeMessage} required={isRequired}></textarea>
                                <label for="message" class="form-label">Message</label>
                            </div>

                            <button class="btn btn-warning">Submit</button>
                        </form>
                        <h6 className='pt-3'>* Please note: This section is currently under construction.</h6>
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

ReactDOM.render(<App />, document.getElementById('root'))


//This is an example of how to create a working contact form.
/* 
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = event => {
    event.preventDefault();
    // Submit the form data to your server here...
  };

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
*/ 
