"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Building } from "lucide-react";

const ContactPage: React.FC = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		subject: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);
	const [status, setStatus] = useState<{
		success: boolean;
		message: string;
	} | null>(null);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setStatus(null);

		try {
			await emailjs.send(
				"service_iwr793c",
				"template_2dox2c7",
				{
					from_name: `${formData.firstName} ${formData.lastName}`,
					from_email: formData.email,
					subject: formData.subject,
					message: formData.message,
				},
				"3DVaBT0oM1izJVkBE"
			);

			setStatus({ success: true, message: "Message sent successfully!" });
			setFormData({
				firstName: "",
				lastName: "",
				email: "",
				subject: "",
				message: "",
			});
		} catch (error) {
			setStatus({
				success: false,
				message: "Failed to send message. Try again.",
			});
		}

		setLoading(false);
	};

	return (
		<div className="container mx-auto px-4 py-16">
			<div className="text-center mb-12">
				<h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
				<p className="text-muted-foreground max-w-2xl mx-auto">
					Have questions? Contact us through any of the following channels or
					fill out the form below.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
				{[
					{
						icon: <Phone className="h-6 w-6" />,
						title: "Phone",
						details: "+17869418750",
					},
					{
						icon: <Mail className="h-6 w-6" />,
						title: "Email",
						details: "support@credixhub.com",
					},
					{
						icon: <Building className="h-6 w-6" />,
						title: "Office",
						details: "55 Water St, Peck Slip, NY 10038, USA",
					},
				].map((method, index) => (
					<Card key={index}>
						<CardContent className="flex items-center p-6">
							<div className="rounded-full p-3 bg-orange-500/10 mr-4">
								{method.icon}
							</div>
							<div>
								<h3 className="font-medium">{method.title}</h3>
								<p className="text-sm text-muted-foreground">
									{method.details}
								</p>
							</div>
						</CardContent>
					</Card>
				))}
			</div>

			<div className="grid md:grid-cols gap-12">
				<Card>
					<CardHeader>
						<CardTitle>Send us a Message</CardTitle>
					</CardHeader>
					<CardContent>
						<form onSubmit={handleSubmit} className="space-y-4">
							<div className="grid grid-cols-2 gap-4">
								<Input
									name="firstName"
									value={formData.firstName}
									onChange={handleChange}
									placeholder="First Name"
									required
								/>
								<Input
									name="lastName"
									value={formData.lastName}
									onChange={handleChange}
									placeholder="Last Name"
									required
								/>
							</div>
							<Input
								name="email"
								type="email"
								value={formData.email}
								onChange={handleChange}
								placeholder="Email"
								required
							/>
							<Input
								name="subject"
								value={formData.subject}
								onChange={handleChange}
								placeholder="Subject"
								required
							/>
							<Textarea
								name="message"
								value={formData.message}
								onChange={handleChange}
								placeholder="Message"
								required
							/>
							<Button type="submit" className="w-full" disabled={loading}>
								{loading ? "Sending..." : "Send Message"}
							</Button>
							{status && (
								<p
									className={`text-center mt-2 ${
										status.success ? "text-green-600" : "text-red-600"
									}`}>
									{status.message}
								</p>
							)}
						</form>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default ContactPage;
