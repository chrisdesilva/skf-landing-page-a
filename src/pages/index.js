import React, { useEffect, useState, useRef } from 'react';
import SEO from '../components/seo';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import animateScrollTo from 'animated-scroll-to';
import '../components/layout.css';

const IndexPage = () => {
	const data = useStaticQuery(graphql`
		query {
			climbers: file(relativePath: { eq: "climbers.png" }) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
			banner: file(relativePath: { eq: "tealbanner.png" }) {
				childImageSharp {
					fluid(maxWidth: 1800) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
			logo: file(relativePath: { eq: "skillsFund_logo.png" }) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
			steps: file(relativePath: { eq: "FourSteps.png" }) {
				childImageSharp {
					fluid(maxWidth: 1800) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
			certificate: file(relativePath: { eq: "certificate.png" }) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
			finishLine: file(relativePath: { eq: "finishLine.png" }) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
			pull: file(relativePath: { eq: "pullTogether.png" }) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`);

	const [ isFormSubmitted, FormSubmitted ] = useState(false);
	const [ navBackground, setNavBackground ] = useState(false);
	const [ values, setValues ] = useState({
		email: '',
		stage: '',
		comments: ''
	});

	const [ IP, setIP ] = useState('');

	// Get IP address from client for Hubspot analytics
	async function fetchIP() {
		const res = await fetch('https://ip.nf/me.json');
		res.json().then((res) => setIP(res.ip.ip)).catch((err) => console.log(err));
	}

	useEffect(() => {
		fetchIP();
	});
	const navRef = useRef();

	navRef.current = navBackground;
	useEffect(() => {
		const handleScroll = () => {
			const show = window.scrollY > 300;
			if (navRef.current !== show) {
				setNavBackground(show);
			}
		};
		document.addEventListener('scroll', handleScroll);
		return () => {
			document.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		const url = `https://api.hsforms.com/submissions/v3/integration/submit/3871135/e1d66c17-474b-4ff4-a302-076223691c3f`;

		// hsCookie gets the data necessary to track Hubspot analytics
		const hsCookie = document.cookie.split(';').reduce((cookies, cookie) => {
			const [ name, value ] = cookie.split('=').map((c) => c.trim());
			cookies[name] = value;
			return cookies;
		}, {});

		//   field names are all set to match internal values on Hubspot
		const data = {
			fields: [
				{
					name: 'email',
					value: `${values.email}`
				},
				{
					name: 'next_steps',
					value: `${values.stage}`
				},
				{
					name: 'comments',
					value: `${values.comments}`
				},
				{
					name: 'stakeholder_type',
					value: 'Student'
				},
				{
					name: 'lead_form_submit_page',
					value: 'Upper Funnel'
				}
			],
			context: {
				hutk: hsCookie.hubspotutk,
				pageUri: `https://info.skills.fund`,
				pageName: `Landing Page A`,
				ipAddress: `${IP}`
			}
		};

		fetch(url, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((res) => res.json())
			.then((response) => console.log('success', response))
			.catch((error) => console.log('error: ', error));
		FormSubmitted(true);
	};

	return (
		<div>
			<SEO title="Home" />
			<nav
				className={
					navBackground ? (
						'flex fixed w-full z-10 bg-white px-2 shadow-xl logo'
					) : (
						'flex fixed w-full z-10 bg-white px-2 logo'
					)
				}
			>
				<div className="w-1/2 py-4 my-auto">
					<a href="https://skills.fund">
						{' '}
						<Img
							className={navBackground ? 'w-32 logo' : 'w-40 logo'}
							fluid={data.logo.childImageSharp.fluid}
							alt="Skills Fund logo"
						/>
					</a>
				</div>
				<div className="py-4 w-1/2 flex justify-end ">
					<a
						href="https://my.skills.fund/register"
						className="bg-secondary py-2 px-4 font-bold text-white text-center w-32 rounded-full cursor-pointer"
					>
						Apply Now
					</a>
				</div>
			</nav>
			<header className="flex flex-col items-center">
				<div className="flex flex-col items-center px-2 md:w-1/2 mt-32">
					<h1 className="font-normal">Fund Your Future</h1>
					<p className="text-center">
						Bootcamps are a great investment to transform your future. We partner with the best schools to
						help you to help you take control of your career - <br />
						<strong className="text-secondary">without breaking the bank.</strong>
					</p>
					<a
						href="https://skills.fund/students"
						className="bg-secondary py-2 px-4 font-bold text-white rounded-full w-48 cursor-pointer"
					>
						Choose Your School
					</a>
				</div>
			</header>
			<Img fluid={data.banner.childImageSharp.fluid} alt="Teal banner" />
			<section className="flex flex-col md:flex-row md:justify-around md:items-center ">
				<div className="md:w-1/3 p-4">
					<h2 className="font-normal md:text-4xl">Wondering How To Pay For A Bootcamp?</h2>
					<p>
						Bootcamps are a life-changing investment in your future & the career you've been dreaming of. We
						make the dream attainable by helping you finance your education. Skills Fund provides the help
						you deserve to build the career you want with simple, straightforward bootcamp loans.
					</p>
				</div>
				<div className="md:w-1/4">
					<Img fluid={data.climbers.childImageSharp.fluid} alt="Students on top of stacks of books" />
				</div>
			</section>
			<section className="flex flex-col items-center mt-8">
				<div className="md:w-1/3">
					<h2 className="font-normal text-center md:text-4xl">How Skills Fund Works</h2>
					<p>
						We make funding your education easier than you thought possible. Once you're approved for a
						Skills Fund loan, we work with your school so you can focus on your program.
					</p>
				</div>
				<div className="md:w-1/2 my-8">
					<Img fluid={data.steps.childImageSharp.fluid} alt="Four steps to financing your education" />
				</div>
			</section>
			<section className="px-4 py-8 flex flex-col items-center bg-primary-dark text-white">
				<div className="flex flex-col items-center">
					<h2 className="font-normal text-center md:text-4xl">We Only Work With The Best Schools</h2>
					<p className="md:w-1/2">
						We evaluate school quality and only partner with programs worth your time and money. Our
						education partners are committed to your success in the classroom and beyond. We look for:{' '}
					</p>
				</div>
				<div className="flex flex-col md:flex-row md:p-8 w-full">
					<div className="md:w-1/3 flex flex-col items-center">
						<div className="w-24 border-2 border-white rounded-full mb-4 bg-white">
							<Img fluid={data.certificate.childImageSharp.fluid} alt="Certificate of achievement" />
						</div>
						<p className="text-center">
							Excellent curriculum<br /> and instruction
						</p>
					</div>
					<div className="md:w-1/3 flex flex-col items-center">
						<div className="w-24 border-2 border-white rounded-full mb-4 bg-white">
							<Img fluid={data.pull.childImageSharp.fluid} alt="Four people using a pulley" />
						</div>
						<p className="text-center">
							Action-oriented <br /> career services{' '}
						</p>
					</div>
					<div className="md:w-1/3 flex flex-col items-center">
						<div className="w-24 border-2 border-white rounded-full mb-4 bg-white">
							<Img fluid={data.finishLine.childImageSharp.fluid} alt="Crossing the finish line" />
						</div>
						<p className="text-center">
							Impressive student <br /> outcomes
						</p>
					</div>
				</div>
			</section>
			<section className="py-8">
				<div
					className="yotpo yotpo-reviews-carousel"
					data-background-color="transparent"
					data-mode="top_rated"
					data-type="site"
					data-count="9"
					data-show-bottomline="1"
					data-autoplay-enabled="1"
					data-autoplay-speed="3000"
					data-show-navigation="1"
				>
					&nbsp;
				</div>
			</section>
			<section className="flex flex-col items-center my-8 contact px-2">
				<h2 className="font-normal text-center md:text-4xl">
					Ready to transform your career? Have more questions?
				</h2>
				<form
					name="apply-skills-fund"
					method="post"
					className="flex flex-col items-center w-full md:w-1/2"
					onSubmit={handleFormSubmit}
				>
					<label htmlFor="email">Email address</label>
					<input
						className="mb-4 border-2 border-black p-2 w-full"
						type="email"
						id="email"
						name="email"
						placeholder="Enter your email address"
						required
						onChange={handleInputChange}
						onBlur={handleInputChange}
						value={values.email}
					/>
					<label htmlFor="stage">What are your next steps?</label>
					<select
						onChange={handleInputChange}
						onBlur={handleInputChange}
						className="mb-4 border-2 border-black p-2 w-full"
						id="stage"
						name="stage"
						value={values.stage}
					>
						<option>Select an option</option>
						<option value="Researching schools or programs">Researching schools or programs</option>
						<option value="Researching financing options">Researching financing options</option>
						<option value="Applying to a school">Applying to a school</option>
						<option value="Applying for financing">Applying for financing</option>
					</select>
					<label htmlFor="comments">Questions/Comments</label>
					<textarea
						className="mb-4 border-2 border-black p-2 h-24 w-full"
						id="comments"
						name="comments"
						placeholder="Enter any questions or comments for our customer trust team"
						onChange={handleInputChange}
						onBlur={handleInputChange}
						value={values.comments}
					/>
					<div className="hidden">
						<input type="text" name="Stakeholder Type" value="Student" readOnly />
						<input type="text" name="Lead Form Submit Page" value="Upper Funnel" readOnly />
					</div>
					{isFormSubmitted ? (
						<p>Thanks for contacting us! We'll be in touch shortly!</p>
					) : (
						<input
							id="landingPageSubmit"
							className="bg-secondary py-2 px-4 font-bold text-white rounded-full w-48 cursor-pointer"
							type="submit"
							value="Submit"
						/>
					)}
				</form>
			</section>
		</div>
	);
};

export default IndexPage;
