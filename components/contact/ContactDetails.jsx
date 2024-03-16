import { FiPhone, FiMail } from 'react-icons/fi';
import React from "react";

const contacts = [
	{
		id: 1,
		name: 'omidzedd@icloud.com',
		icon: <FiMail />,
	},
	{
		id: 2,
		name: '(951) 505-7539',
		icon: <FiPhone />,
	},
];

function ContactDetails() {
	return (
		<div className='w-full lg:w-1/2'>
			<div className='text-left max-w-xl px-6'>
				<h2 className='font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8'>Contact details</h2>
				<ul>
					{contacts.map(contact => (
						<li
							className='flex '
							key={contact.id}>
							<i className='text-2xl text-neutral-500 dark:text-neutral-400 mr-4 mt-1'>{contact.icon}</i>
							<span className='text-lg mb-4 text-ternary-dark dark:text-ternary-light'>{contact.name}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default ContactDetails;
