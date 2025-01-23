const ContactUs = () => {
	return (
        <section id="contact-us" className="py-10 w-full bg-green-light">
            <div className="w-full p-2 md:px-5 flex flex-col items-center justify-center gap-3">

				<div className="text-center">
					<h2 className="text-4xl">
						Get in <span> Touch </span>
					</h2>

					<p className="text-sm text-gray-300 max-w-3xl">
						We’d love to hear from you! Whether you have a question or want to book an appointment, we’re here to help.
					</p>
				</div>
			

				<div className="w-full mx-auto">
					{/* Form */}
					<div className="bg-white text-black rounded-lg shadow-lg p-3 md:p-6">
						<form className="space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								{/* Name */}
								<div>
									<label htmlFor="name" className="block text-sm font-medium">
										Your Name
									</label>
									<input
										type="text"
										id="name"
										placeholder="Enter your name"
										className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
									/>
								</div>

								{/* Email */}
								<div>
									<label htmlFor="email" className="block text-sm font-medium">
										Your Email
									</label>
									<input
										type="email"
										id="email"
										placeholder="Enter your email"
										className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
									/>
								</div>
							</div>

							{/* Message */}
							<div>
								<label htmlFor="message" className="block text-sm font-medium">
									Message
								</label>
								<textarea
									id="message"
									rows="4"
									placeholder="Write your message"
									className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
								></textarea>
							</div>

							{/* Submit Button */}
							<div className="text-center">
								<button
									type="submit"
									className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300"
								>
									Send Message
								</button>
							</div>
						</form>
					</div>
				</div>

			</div>
		</section>
	);
};

export default ContactUs;
