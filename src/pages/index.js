import React, { useState } from 'react';
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

	const handleFormSubmit = (e) => {
		e.preventDefault();
		FormSubmitted(true);
	};

	return (
		<div>
			<SEO title="Home" />
			<div className="flex justify-between">
				<div className="w-48 ml-4 mt-4">
					<Img fluid={data.logo.childImageSharp.fluid} alt="Skills Fund logo" />
				</div>
				<div className="mr-4 mt-4">
					<button className="bg-secondary py-2 px-4 font-bold text-white rounded-full w-48 cursor-pointer">
						Apply Now
					</button>
				</div>
			</div>
			<header className="flex flex-col items-center mt-8">
				<div className="flex flex-col items-center px-2 md:w-1/2">
					<h1 className="font-normal">Fund Your Future</h1>
					<p className="text-center">
						Bootcamps are a great investment in transforming your future. We partner with schools that help
						you take control of your career - <br />
						<strong className="text-secondary">without breaking the bank.</strong>
					</p>
					<button
						onClick={() => animateScrollTo(document.querySelector('.contact'))}
						className="bg-secondary py-2 px-4 font-bold text-white rounded-full w-48 cursor-pointer"
					>
						Get More Info
					</button>
				</div>
			</header>
			<Img fluid={data.banner.childImageSharp.fluid} alt="Teal banner" />
			<section className="flex flex-col md:flex-row md:justify-around md:items-center ">
				<div className="md:w-1/3 p-4">
					<h2 className="font-normal md:text-4xl">Wondering How To Pay For A Bootcamp?</h2>
					<p>
						Education is a life-changing investment in your future & the career you've been dreaming of. We
						make the dream attainable by helping you finance your education. Skills Fund provides the help
						you deserve to build the career you want. Simple, straightforward bootcamp loans.
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
					<h2 className="font-normal text-center md:text-4xl">We Work With Schools We Believe In</h2>
					<p className="md:w-1/2">
						We evaluate school quality and only partner with programs worth your time and money. Our
						education partners are committed to your success in the classroom and beyond. We look for:{' '}
					</p>
				</div>
				<div className="flex px-8">
					<div className="w-1/3 flex flex-col items-center">
						<div className="w-24 border-2 border-white rounded-full mb-4 bg-white">
							<Img fluid={data.certificate.childImageSharp.fluid} alt="Certificate of achievement" />
						</div>
						<p className="text-center">High quality of curriculum</p>
					</div>
					<div className="w-1/3 flex flex-col items-center">
						<div className="w-24 border-2 border-white rounded-full mb-4 bg-white">
							<Img fluid={data.pull.childImageSharp.fluid} alt="Four people using a pulley" />
						</div>
						<p className="text-center">Action-oriented career services </p>
					</div>
					<div className="w-1/3 flex flex-col items-center">
						<div className="w-24 border-2 border-white rounded-full mb-4 bg-white">
							<Img fluid={data.finishLine.childImageSharp.fluid} alt="Crossing the finish line" />
						</div>
						<p className="text-center">Impressive student outcomes</p>
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
			<section className="flex flex-col items-center my-8 contact">
				<h2 className="font-normal text-center md:text-4xl">
					Ready to transform your career? Have more questions?
				</h2>
				<form className="flex flex-col items-center">
					<label htmlFor="email">Email address</label>
					<input
						className="mb-4 border-2 border-black p-2 w-64"
						type="email"
						id="email"
						placeholder="Enter your email address"
						required
					/>
					<label htmlfor="stage">What are your next steps?</label>
					<select className="mb-4 border-2 border-black p-2 w-64" id="stage">
						<option disabled selected>
							Select an option
						</option>
						<option>Researching different programs</option>
						<option>Researching different schools</option>
						<option>Applying to a school</option>
						<option>Applying for financing</option>
					</select>
					<label htmlfor="comments">Questions/Comments</label>
					<textarea
						className="mb-4 border-2 border-black p-2 h-24 w-64"
						id="comments"
						placeholder="Enter any questions or comments for our customer trust team"
					/>
					<input
						className="bg-secondary py-2 px-4 font-bold text-white rounded-full w-48 cursor-pointer"
						type="submit"
						value="Submit"
						onClick={handleFormSubmit}
					/>
				</form>
			</section>
		</div>
	);
};

export default IndexPage;
