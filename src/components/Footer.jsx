import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
            सानोBazar
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Discover the best deals and products online. Shop smarter, live
            better with curated selections and amazing offers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-1 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-white transition">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-white transition">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Payment options */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
            Payment Options
          </h3>
          <div className="flex gap-3 items-center flex-wrap">
            <img
              src="data:image/png;base64,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"
              alt="eSewa"
              className="h-10"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGXuonGgeIXtahvJpM1w3MntF_kbFHga2lwg&s"
              alt="Khalti"
              className="h-10 w-14"
            />
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA1VBMVEX////tHCTsAADsAAsAQaLtFR73q63vQ0j84uPtGCHsABEATaYASqXsBhT+9fYAT6cAV6oARKMAUqgAVan60NEAPKAASKQAP6Hz9/sAOZ8AWqvtDxrQ2+uds9VtksUAQ6O3yODc4+/q8PcANZ7D0eX60dLwUVWQq9F4mcjyc3b2pKb4vb772tv2n6HuNTv1k5bzf4L0iIqpvtsyb7X5wMHyb3LwVVnvSE1YhL4ZYq+Cos3xZWj4s7XuKC/97OzvPUJeiMBIermVr9M+dLYAK5vxXmInabLrfNSHAAARGElEQVR4nO1cCVfiPBeG1KptKdCyU5a2dBQQBOqKIoLO+P9/0pd7ky4souK8YzlfnnPGaUsa8vTe3C0pqZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwP8VssVh7+5JST/d9fqDnx7M38e8f0eIaskKhWxJxBrNf3pIfxXFP0SS03EoKhlnf3pYfw3FZ2KlN6GT2U+P7O8g+4fIW/iBHMnNTw/ub+B6q/w4pLufHt73MSLKmuAsXVV1nYtVP/npAX4XYxJnJ6uEXN5MhsNR74Qw3ZUOXFFHMYKyRE5GxdB+Zi/uULyHbW6uI4I6OTle94AXIEaFHLDTyIZzkDq/0y0N5k+Uojr+5wP7a/hjBfIbvSOnrEWfATnY6OYXCbze+3oIbRT97vLy5HEyOzimZ2gsLfV6V6NHkLMMsaoukcvjfzW2v4IBilB/3mFIssNnfcWbSGT47wb4bUxg8Nbz+w2yYwjHUdCEEAknrSI9HU5ipVAjoiir1y5ix32ioxOhzKTsfDD7w8I7hfT/6TD3xxyUlPxauVaMzrNn9HOLTOYwXQm6kvkNM03kQNwHeHtrLSRTpBE/mqepAMktzFGqzYQbo9lBURyq3NPNB8XiAM3NWFWe2Idzi04/MsHjvpSWAsUscoqjLR0mDmhoLnqXhEF+nIGEmD6mnmDycUnNpLQaMgqkWPyRMX8NGNBIehC3KZYkwQWU1iNlL1/yhsdSWp+Et/V01vonhvwlZG+kkBpFmCNatymIuONGiApbj2mlim0TH6wOLJ1HpOTpT693+xQWMiCTAD8iY3Y/uj2en8ggw2wQGByzR5PwYPWCJxXW+JoPPHvCKZKL1DGIUMK0cEAk5E6fBAk8PRO4nmghcnORVqMQ7AKiFknVLZrTPymRjHpB1BZ5iJEaCjupwJxCUeW01QuvZQeD4ux4NH6862G8GriNLH8Y+m3YdM4uScnN/bMqk9GlEtBYBYtXH/nZEKedHG/JFNr6898PdU+AK4DqC9U2si2KRiWN/EMawtcVuzLkavrfD3U/oI7Kz5g9xfxcCKaX0RSF6G7VwQ8S7vXPLGYxU6lLWZE2P/+1xjB1Z5G1xJdPxISmikwAqGHUpEqbAeYFYziK3bHuGHhxoJdKJJgdYVaCTrFNx91H0xLX3w1tHKELkXckzz8JWYkkRMUVRp8hGEP59no4GY/Ho+Pipt+bSQk2NackHUxDilsrra+vvTCGaZmoOoUqEXLXXyMZmJpE+nz2+IOoGlyjtVZ4mQUheQhZWlss5WFAMkNTnIZBFsikoZCbWC1j3tu+WLpiTtUEM8TyZ8SQJu0KlGPUx1F/NutPbsl7q4kkHsIoSnIZ3smrDClFoKRYqkShv7MYjGK8jDQ1rSR3Hj7L8XkImD+T7ZRkXeIVDlYqtZ5CRpzhTxD4ECxqJvG6aGpIJGWToPU8mWGBKns6uyHoRUPPgloqn/3z0X8GLBxRVwOu7Mgi+hpJecWLZMcwX9UgikFLoyez4HaDCreZoBfHTyTQScZwbQF/AHOUB9ssQ0xo5M28xfrwEdnBNUVxzhziRkw2p9EQTyixarotak8Cjt8LuAah6WfJhbyxzwTCIbaoj3WMpBZqgqL1euo7ImGmwBiGSX6EPqE2FA4ulVWPkyhktxZZ5s+SEoqVPYRtyTHN/mHy4SNIbhEDaxRrSzIzqBiGHoQx3FZoojMUkkKMGpIqwsDUrJiJR6aWgVBYCkxOJ/3r07WohX4isVpkgtdmiutFliIvf4dBGKZP1GoSCGn0s/EwCg9oVKuP4WMryfvd2LpDVIKgPBhFiacPmFzQHBkDPEXWSRR/giXGnQvpRIakHBsl6/k1ViWUwD/o3FKO+dJGzCuw/DltWYnMKgJwa6rGJxJkiTSmQePBLOVZmApbUZQ+YKSlyyRLkGKyse6Avjw1OMEJhxkkJB+8VpEmVq9/cT0b3shMnUlCa2wxsJmoRwOlYlNUfoy8mLsPsirFonNVUvki42pekkzwHYkk3AtFGYaR6mW0HZGaGrKSc8i40PYjY/4i2LZZJV6tCZK9P3rEfayTwWCSBvmpUHMjtzT3Wt+Bk1Dc4lRUVE6RGh8Fs9vsmRrz5ses/DS/Ph6NRv2LUwwXkloHXseZxKTIQzM6xSAsnWG5IgxXTjfili1bcBKLRz4XnwP7KR2PFMjj5fVlmBjAlUqHsucrNWR7E2RCaFz2TKlJKi4U7tiYh/5+65JjMnF6wvdfyLrK7aUs7ZJQFtdKty4bJxXXd0SNFUgV8rxrg2z2CbcYJXTR8D2cDs/C6pPytDPYHMisWv6vhvYXcVq8vi7ilrZdM4y/WnNoIoyBxtQ7pljxkkXhrExzmICMI7ZnZgXFu2BP2NqG28PCECiebKZF2X5sz1tySxefAezntqRVazo/vo2taRz6S15ZKNsrkjW5RpuaHczGT3zViUtws4J6YDhFbVT0cP1iZbFGIVsKqIeGU+v9t0n1Q0h8P0b27p3FUos8Jrw082n0ibpNfmeH7CXWkJ2svpgP03J8OOnEp5A9PgMro1vwshqxejvfbDtYFI9HvZvepH+d6Mrvf4XZMYArbrZ/HMNscw/cYNjD1zNH14djqi6JJEnB+2uncBKBkLsVp3JBG1uyrMiWSsjtoeg77lcJorvTdfcik5NIs1d/jsIiSmLXHFewmyG8dRvwuNTXPkro7o11bGOIW8aCsr/Ma8Y3vCiLISCWSw6XoTrsUwx7MsuTVYxg2cKOrA4H2ez81/CO6AfMMCzeHMe21uJyuhItpZ6OyQEzDGmwDcYYpeMS8sp+h+zjYVjTnQxT0UZ/nJUHWfbYzRAlhwvjmF0ezhpADJ9liBt3FOkA477dDKOXNfjrtPphWJc4djLkrwKAfbkOflfkMfGRzH3Gjp/uYngd8xapZyuI1h6TnWC2cplG/HwLQ2l2QTEb8R3jfA/EPPx9H4vcJVlXM/XMyvm2qA23vEt8ISv82aVBFHjL5C6xutrQ8vcrFz6KvOVohef0KXr/xkpswfzFNP2VCx9lT09xYY1IlF+Qd5ZFPovmlZa78viJ052WtVc2MrduuilvqWXegpH62pK2fzPMpRPdD7cUFlV+Zi9NbdqEo9e82W2+vJwHXW9lqKsIqqzrv0KUnUTVO+k7m27tTMH3Xs22i2etstn07GkZ1esll7MXdds9z5U5xbd8xtUWDefVLLtBB93aPb0jd8XYTisvXss07FSqqtXr3RZFcwdDfcTQv9ji3ynH8I33/X+E6dyY0r9uJmfD2dTMwMhdLQOUloX6dEH/r2byb9jYzdSnZWjo53LBuK/KXbxgwIlnZEC4VHj0WCu0Vr9rV26xHZQjcxz7/5qGX0aDXs1kQJdeC/klXs4X4H+tzphVM/U6XrZz9dwL3pYzH1gHS3PKLmj0r1NmxKe581TqwWRPbTfDj6pM8z/fezm6WmaUbAMo+FqdP3YzPwUh1Ms43ahRZDrYKnBhPpgmk6Gv5VCBFzm4cZrPwYlrGC7T6O8zhJ++gYbqnva0VWDP2X8AQ2HW8/lXHGIGGD6YhQW2okaRSaxe17A5Hb3GfLmZB9lR4cG89DXWrtGiD8Yt56dr37YfQxaI7/lyNFU/LTqzc4XW0gCqXg609CqgsSzkPMaDa6tbrqOwqHKi0J28AZIMebPeAkUO8VmGa5Ha6i81fA1+Lu6TF1SgtgEjpkp4TjWY84HYBH1BM5ClHdz3lqfc3QcDbCc8gELUW5c/Fvo8AqafZThZdX+403rP92xahZhPdrU6NYTL9gvMJ2p/qEi7+IGnMd2NhEqVG++jsiy03mrtFj6AUKsRhbrBj5qBSf0swxFR49XhS7xtv4T4Kq5WLyaGkcvSPRXRW0wI5yBRxofHmfk6OgUqVOryQo9er5svYW+N4LFQQdtfZagqsYC7h5Zmz9dQpnktik2ob0CL6U+pDfVgwAaLU5b8OTyYXDep/pqMU57bVsCLVs9FGvFaYI+FKm8puPZ5hhDDpScXvwbF4RMStPZ8J3OZz4Uh1ZK6Av7UTXOBtpC5CDD7QJXGKFynnQyj6k8L3OJQNEqLfECK0jWCxqmr8OJXGAbbAvjWwH3fJPIzYdixfEstTCaZbgaoUafOh/bKGNIIh+kmkAeGbs1ZhubE7viuEfqH8wy3svQw8hmfZdhf/w1thexdTFxqWpc6MuelvcDQrVtNua0SBgGLQjBHXzQ6v9zX13xgW1PTQs5JeRU/5eZo/lBNVb3Xmg0RIEbkrl+fuqm6qdGgwFkUquG3fdofDu7ib74rkvqNLLg5bZdqtdoSybivlVqnxg1DywhsYWpRbndK56mMEQjcmWZKnTqGe91cpVbrlLvIw7sySrVOZwr6Wb0vt2sdI+4T2U/YhatriHc8/q+baDV533AmgNtoOPGTMNJqVOOX8W90lxPd5MQ7qNKz4L5q/AMcdhHAk4gsnuwQTrE/6T3ejPtJrmIICAgICHwLVbf6caMkwbmnvvBl8dnm7hWNAloftwPY9+7Oz6v3/s7P/xI8CMpa2oftOPKm7TS8j9sBmrUPGNbWSwX/CRpH9kdNqq/hYePoC4+9WfmA4dH3GLpO2L/LjvgFNxbKOYwhXqL/qtVYc9aAXql2vOCSZ/hwCaYiXgkmJV5w125uHlWrThjoBcNxwrs4Q2c1APwknAKE3TlMkvI0/i690m54Hm8Eqa1fKJUqb1BjW0Aq+9u7/00ldF6u1Y5wprn3EHrf07S4XKtwhjmj9ttOTZsPNZpleVPa9RR0ttXyy7XSm+tr8DdgmJuWSqUp7T/VyNCWbei18dtZ0vHchwwfftt7MWx3G05jUYEuzj3HsQs0n/XbMBivwnv0K692w8alzhZwL5eXXjX1UHpw3Beg6JZN34FJVzW6gdy9NsrwSpvaLs2MrzzXezuipqqb03zHz5jlJv0bKHUz0/Ia9luFfqvTbDg0kaO8HO1o0XDOIZlBhl7tPLUPHDa77ivBBZ+Oo4o50n2Qu2soS9RSZGgs4JzlUd0SJFmcVvUoHIRXQStzhenkK+sJVkK6uDiywDJzN/jSZgWV0Qyn8aJMR2ZgZ0uNMXTbq8t0X2CIFsGuQFrk2Lb3YtCjRZt2W+HT2600Vxm2of7WMF4aFOeUXZ2XOrYxxIdTZl5jQQfbPYKjhyOgdH7kBgzxoFXG77HtBjJkI+saVWRYX68tf5Ghd0R1DCZDLQNpvUfZhAaON1lj6GkwY2ptauhzi90Mq232rB6OdjN8oGQaGgzC1NYYntvBlNmXoU11swXVNToHQZrmMvW25E3co60ybPtVF0ANU6Bd7zE0WNEVZLRThrRzc8q0eEOG09yeERKfhws6Ja6mAVc6hLIXPbTy6xaG1XY3+LzFS47vaumUaRgU7nYxNK+CqdHdZOgYwRP/KkMDyivnYJ8XsE7kLHGpzQnKoexLYOC2scKQ2glW84Zq6BWMkPZTCa3BCsMmWvsuDHk7wzb4vnt4hGWY0940s8GQPoY9bakGil9ZIquS2a7dl7AUc5WL9besVDKlNgi1BQPsMOktSqVCrgPytbWaVijRo3tD47U4r4MM35j0upVKoVKB21odZNhBhh3O8MWoGOUSKoB/VCmUDDDtjQ5Ojm6JMuzAE1p2PhkErjFs+57vM2tftX3fTfn4tauBVMP3fQ8uePCtzWC5xW76NmtG+8BOaA+83yb2GZy6Nm+JHfC/jWag3Q16H+/JpUf0K+hBsxE2xW+sNveKv5134sfCnt4neXAq2xg26tqB5Xbvw6ltY9h8c7dcFRAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEPi/wf8A7KqfC7vYor4AAAAASUVORK5CYII="
              alt="ConnectIPS"
              className="h-10 w-14"
            />
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-700 py-3 text-center text-gray-500 text-xs md:text-sm">
        &copy; {new Date().getFullYear()} सानोBazar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
