import React from "react";
import logo from "./assets/Nico.svg";
import barber from "./assets/barber.jpg";
import { Button, Icon, Layout } from "antd";
import "antd/dist/antd.css";

const BOOK_BUTTON_LiNK = "https://my.setmore.com/bookingpage/97b6432a-0bcb-4d8b-bfaf-6c7d07d8a0a4";
const INSTAGRAM_LINK = "https://instagram.com/cervantesnico";

const EMAIL = "nicocerv@hotmail.com";
const NUMBER = "647-924-698";
const ADDRESS = "222 Albert Street";

const EMAIL_LINK = `mailto:${EMAIL}?Subject==Barber%20Inquiry`;
const PHONE_LINK = "tel:647-924-6984";
const ADDRESS_LINK = "https://maps.google.com/maps?q=222+Albert+St,+Waterloo,+ON+N2L3T6";

const {  Content, Footer } = Layout;
const Styles ={
	layout: {
		color: "white",
		height: "100vh",
		padding: 0,
		textAlign: "center",
	},
	content :{
		backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.9)), url(${barber})`,
		backgroundPosition: "center/cover",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "500px",
	},
	content__container: {
		position: "relative",
		top: "50%",
		transform: "translateY(-50%)",
	},
	content__button_container: {
		margin: "15px",
	},
	content__book_button: {
		background: "black",
		color: "white",
		display: "relative",
		fontWeight: "bold", 
		marginRight: "10px",
	},
	content__instagram_button: {
		background:"rgb(202, 174, 126)",
		color: "white",
		fontWeight: "bold",
		marginTop: "5px",
	},
	footer: {
		background: "black",
		color: "white", 
	},
	footer__contact_container: {
		fontSize: "14px", 
	},
	footer__link:{
		color: "white",
	},
	footer__copyright: {
		fontSize: "10px",
	}
};

function App() {
	return (
		<Layout style={Styles.layout}>
			<Content style={Styles.content}>
				<div style={Styles.content__container}>
					<img alt="Nico the Barber logo" src={logo} width={200} height={200} />
					<div style={Styles.content__button_container}>
						<Button
							id="Setmore_button_iframe"
							href={BOOK_BUTTON_LiNK}
							target="_blank"
							style={Styles.content__book_button}>
                Book Appointment
						</Button>
						{/* <br/> */}
						<Button
							style={Styles.content__instagram_button}
							href={INSTAGRAM_LINK}
							target="_blank" >
            Instagram <Icon type="instagram"/>
						</Button>
					</div>
				</div>
			</Content>
			<Footer style={Styles.footer}>
				<div style={Styles.footer__contact_container}>
					<Button type="link" style={Styles.footer__link} href={EMAIL_LINK} target="_top">{EMAIL}</Button>|<Button type="link" style={Styles.footer__link} href={PHONE_LINK}> {NUMBER} </Button>|<Button type="link" style={Styles.footer__link} href={ADDRESS_LINK} target="_blank"> {ADDRESS} </Button>
				</div>
				<br/>
				<p style={Styles.footer__copyright}>Nico the Barber © 2020</p>
			</Footer>
		</Layout>
	);
}

export default App;
