
import React, { useState, useEffect } from 'react';
import "../Students/Students.css"
import "../Students/Student.css"

const Students = (props) => {
    const [name, setName] = useState('')
    const [userName, setuserName] = useState('')
    const [img, setImg] = useState('')
    const [url, setUrl] = useState('')
    const [bio, setBio] = useState('')
    const [twitter, setTwitter] = useState('')
    const [company, setCompany] = useState('')
    const [location, setLocation] = useState('')
    const [blog, setBlog] = useState('')
    const [followers, setFollowers] = useState('')
    const [following, setFollowering] = useState('')
    const [repo, setRepo] = useState('')
    const [userInput, setUserInput] = useState('')

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/profile`, {
            method: "PUT",
            body: JSON.stringify({
                id: props.user._id,
                githubUsername: props.user.githubUsername
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                console.log(res)
                res.json().then(data => {
                    setData(data)
                })
            })
    }, []);

    const setData = ({ name, login, avatar_url, html_url, bio, twitter_username, company, location, blog, followers, following, public_repos }) => {
        setName(name);
        setuserName(login);
        setImg(avatar_url);
        setUrl(html_url);
        setBio(bio);
        setTwitter(twitter_username);
        setCompany(company);
        setLocation(location);
        setBlog(blog);
        setFollowers(followers);
        setFollowering(following);
        setRepo(public_repos);

    }

    const handleSearch = (e) => {
        setUserInput(e.target.value)
    }
    const handleSubmit = () => {
        fetch(`https://api.github.com/users/{}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
                console.log(data)
            })
    }

    return (
        <>
            <section className="feed">
                <div className="container">
                    <div className="feed-container">
                        <div className="profile-card2">
                            <div className="card-header2">
                                <h2>Hello {name}</h2>
                                <p>SEI Immersive Student</p>
                                <p>Class: 629</p>
                            </div>
                            <img className="image2"
                                src={img} alt={name} />
                            <div className="card-info2">
                                <p>Profile Info</p>
                                <h3 className='list-head'> {userName}</h3>
                                <p className='repo-description'>{bio}</p>
                                <hr />
                                <p>Loaction: </p>
                                <p>{location || 'GA Lounge Couch'}</p>
                                <hr />
                                <p>Current Employer:</p>
                                <p>{company || 'Independent'}</p>
                                <hr />
                            </div>
                        </div>
                        <div className="card-container">
                            <div className="post-card">
                                <div className="post-card__content">
                                    <form onSubmit={handleSubmit}>
                                        <input type="text" placeholder="Search another Github" name="github user" onChange={handleSearch} />
                                        <button content="search">Search</button>
                                    </form>
                                </div>
                            </div>
                            <div className="post-card">
                                <div className="post-card__content">
                                    <div className="post-card__info">
                                        <h2>Code Pen</h2>
                                        <div>
                                            <iframe className="iframe"
                                                scrolling="no" title="fx."
                                                src="//codepen.io/ycw/embed/JqwbQw/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>

                                        </div>
                                        <a href="https://github.com/Johnathanblackburncodes/merge-immersive">Github Link</a>
                                    </div>
                                </div>
                            </div>
                            <div className="post-card">
                                <div className="post-card__content">
                                    <div className="post-card__info">
                                        <h1> Github Stats</h1>
                                        <p>Followers: {followers}</p>
                                        <p>Following: {following}</p>
                                        <p>Repos: {repo}</p>
                                        <a href={url}>Follow</a>
                                    </div>
                                </div>
                            </div>
                            <div className="post-card">
                                <div className="post-card__content">
                                    <div className="post-card__info">
                                        <h1>Social</h1>
                                        <p>Favorite Emoji: 🥴</p>
                                        <hr />
                                        <h6>Social Media</h6>
                                        <hr />
                                        <p>Twitter Handle @{twitter || 'No Twitter Info.'}</p>
                                        <a href={`https://${blog}`}>{blog}</a>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                            <div className="post-card">
                                <div className="post-card__content">
                                    <div className="post-card__info">
                                        <h1>Hobbies</h1>
                                        <p></p>

                                    </div>
                                </div>
                            </div>
                            <div className="post-card">
                                <div className="post-card__content">
                                    <div className="post-card__info">
                                        <h1>Hobbies</h1>
                                        <p></p>

                                    </div>
                                </div>
                            </div>
                            <div className="post-card">
                                <div className="post-card__content">
                                    <div className="post-card__info">
                                        <h1>Hobbies</h1>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
        // <>
        //     <h1>Hello {name}</h1>
        //     <form onSubmit={handleSubmit}>
        //         <input type="text" placeholder="Github User" name="github user" onChange={handleSearch} />
        //         <button content="search">Search</button>
        //     </form>
        //     <h3 className='list-head'> {userName}</h3>
        //     <img className="profile-pic" src={img} alt={name} />
        //     <p className='repo-description'>{bio}</p>
        //     <div>
        //         <p>Twitter Handle @{twitter || 'No Twitter Info.'}</p>
        //     </div>
        //     <div>
        //         <a href={url}>Follow</a>
        //         <p>Followers {followers}</p>
        //         <p>Following {following}</p>
        //         <p>Repos {repo}</p>
        //     </div>
        //     <div>
        //         <p>{company || 'Independent'}</p>
        //     </div>
        //     <div>
        //         <p>{location || 'GA Lounge Couch'}</p>
        //         <a href={`https://${blog}`}>{blog}</a>
        //     </div>
        //     <div>
        //         <iframe height="600" width="800" scrolling="no" title="fx." src="//codepen.io/ycw/embed/JqwbQw/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>

        //     </div>
        // </>

    );
}


export default Students;




