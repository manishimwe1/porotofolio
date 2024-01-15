"use client";

import {
	PhoneIcon,
	MapIcon,
	EnvelopeIcon,
} from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

type Inputs = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

const Contact = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = async (
		formData,
	) => {
		//Todo:emplement Email Js
		// console.log("Starting to send email ...");
		toast.loading("Starting to send email ...", {
			duration: 2000,
		});
		const response = await emailjs.send(
			"service_ab9nhn9",
			"template_etofumq",

			formData,
			"3nolMgFHifk0xNIde",
		);
		console.log(
			"SUCCESS",
			response.status,
			response.text,
		);
		toast.success("SUCCESS");
	};
	return (
		<div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px:10 justify-evenly mx-auto items-center'>
			<h1 className='title'>Contact</h1>
			<div className='flex flex-col space-y-2 gap-4 mt-24 '>
				<h4 className='text-xl font-semibold text-center'>
					I have got what you need.{" "}
					<span className='underline decoration-4 underline-offset-[6px] lg:underline-offset-[10px] decoration-[#00BFFF]/50'>
						Lets Talk.
					</span>
				</h4>
				<div className='space-y-2 mx-auto md:pl-20'>
					<div className='flex items-center space-x-5 justify-start'>
						<PhoneIcon className='text-[#00BFFF]/50 h-7 w-7 animate-pulse' />
						<p className='text-base text-slate-400 '>
							+250793417907
						</p>
					</div>
					<div className='flex items-center space-x-5 justify-start'>
						<EnvelopeIcon className='text-[#00BFFF]/50 h-7 w-7 animate-pulse' />
						<p className='text-base text-slate-400 '>
							emmymanishimwem@gmail.com
						</p>
					</div>
					<div className='flex items-center space-x-5 justify-start'>
						<MapIcon className='text-[#00BFFF]/50 h-7 w-7 animate-pulse' />
						<p className='text-base text-slate-400 '>
							+250 Kigali Rwanda
						</p>
					</div>
				</div>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col gap-2 mx-auto w-full'>
					<div className='flex gap-2 flex-col md:flex-row'>
						<input
							className='customerInput'
							type='text'
							{...register("name")}
							placeholder='name'
						/>
						<input
							className='customerInput'
							type='email'
							placeholder='email'
							{...register("email")}
						/>
					</div>
					<input
						className='customerInput'
						type='text'
						placeholder='subject'
						{...register("subject")}
					/>
					<textarea
						placeholder='Message'
						className='customerInput'
						{...register("message")}
					/>
					<button
						className='bg-[#00BFFF]/50  py-4 px-10 rounded-md text-black font-bold text-lg hover:bg-[#00BFFF]/70 shadow-sm hover:shadow-md shadow-[#00BFFF]/60'
						type='submit'>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
