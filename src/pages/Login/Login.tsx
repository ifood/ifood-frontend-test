import React from "react";
import { RouteComponentProps } from "react-router";
import { Button } from "../../components/Button/Button";
import { Loading } from "../../components/Loading/Loading";
import { SpotifyService } from "../../services/spotify";
import { Link } from "../../components/Link/Link";
import "./Login.scss";

export const Login = ({ history }: RouteComponentProps) => {
	const token = history.location.hash
		.split("&")[0]
		.replace("#access_token=", "");

	if (token) {
		SpotifyService.setAccessToken(token);
		SpotifyService.setUserInformation().then(() => {
			history.push("/playlists");
		});

		return (
			<div className="login-loading">
				<Loading width={100} height={100} />
			</div>
		);
	}

	return (
		<div className="login">
			<section className="login__content">
				<div className="login__content__description">
					<h2 className="login__title">Spotifood</h2>
					<Link href={SpotifyService.getAuthURI()}>
						<Button label="Login with Spotify" className="button" />
					</Link>
				</div>
			</section>
		</div>
	);
};
