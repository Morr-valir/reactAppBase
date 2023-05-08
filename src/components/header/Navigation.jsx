import React from "react";
import Logo from "../../assets/svg/Logo-burger-house.svg";
import Icone from '../../assets/svg/ico-bag-clickAndCollect.svg'
import Button from "../elements/Button";
export default function Navigation() {
	return (
		<nav className="flex items-center justify-between py-10">
			<img src={Logo} alt="Burger house app" className="w-64" />
            <div>
                <div className="flex items-center justify-end gap-1">
                    <img className="w-5 h-5" src={Icone} alt="click and collect" />
                    <span className="block">Commandez votre repas en ligne</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                    <Button className={'bg-primary hover:bg-secondary'} name="Inscription"/>
                    <Button className={'bg-secondary hover:bg-secondary'} name="Connexion"/>
                </div>
            </div>
		</nav>
	);
}
