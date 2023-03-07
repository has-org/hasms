import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className="bg-[#000]  flex flex-col text-white font-serif">
      <div className="flex justify-between px-20 mt-10 text-white">
        <div className="flex flex-col">
          <h2>Maloprodaja</h2>
          <ul className="">
            <li>Njegoševa 34a,</li>
            <li>78000 Banja Luka</li>
            <li>Kontakt: +387 51 305 077</li>
            <li>Email: motoshop7bl@gmail.com</li>
            <li>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.8891209695134!2d17.190244415808795!3d44.7830657790988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475e0300fed7a243%3A0x45d7f41b6986df22!2sNjego%C5%A1eva%2034%2C%20Banja%20Luka%2078000!5e0!3m2!1sen!2sba!4v1675361811814!5m2!1sen!2sba"
                width="250"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </li>
          </ul>
        </div>
        <div className="flex flex-col ">
          <h2>Servis i veleprodaja</h2>
          <ul className="">
            <li>Jesenjinova 14</li>
            <li>78000 Banja Luka</li>
            <li>Kontakt: +387 65 514 807</li>
            <li>Kontakt: +387 66 173 700</li>
            <li>Email: servis@motoshop7.ba</li>
            <li>Email: info@motoshop7.ba</li>
            <li>Email: yamaha@motoshop7.ba</li>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2833.3779260384463!2d17.163718415807967!3d44.75270667909902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475e02d4ef6ed02b%3A0xebdf7ceaa2cf1fbf!2sJesenjinova%2014%2C%20Banja%20Luka%2078000!5e0!3m2!1sen!2sba!4v1675361911066!5m2!1sen!2sba"
              width="250"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </ul>
        </div>
        <div className="flex flex-col gap-y-4">
          <h2>Kontaktirajte nas</h2>
          <select name="emails" id="emails" value={""}>
            <option value="">servis@motoshop7.ba</option>
            <option value="">info@motoshop7.ba</option>
            <option value="">yamaha@motoshop7.ba</option>
          </select>
          <input type="text" id="fname" name="fname" />
          <input type="text" id="fname" name="fname" />
          <input type="text" id="fname" name="fname" />
          <input type="text" id="fname" name="fname" />
          Blabnlablabla
          <input type="submit" value="Submit" />
        </div>
      </div>
    </div>
  );
}

{
  /* <ul className="">
<li>Pocetna</li>
<li>O nama</li>
<li>Novosti</li>
<li>Homologacije</li>
<li>Kontakt</li>
<li>Zastita privatnosti</li>
<li>Opsti uslovi</li>
<li>Uslovi poslovanja</li>
</ul> */
}
