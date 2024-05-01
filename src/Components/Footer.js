import {
  TwitterLogo,
  InstagramLogo,
  FacebookLogo,
  SnapchatLogo,
  LinkedinLogo,
} from "phosphor-react";
import { MDBFooter } from 'mdb-react-ui-kit';
//Last minute add on component to make the site look nicer
export default function Footer() {
  return (
    <MDBFooter >
    {/*Logos representing fictional social media, not containing links*/}
      <p>Official Information</p>
      <TwitterLogo size={32}/>
      <InstagramLogo size={32} />
      <FacebookLogo size={32} />
      <SnapchatLogo size={32} />
      <LinkedinLogo size={32} />
    </MDBFooter>
  );
}
