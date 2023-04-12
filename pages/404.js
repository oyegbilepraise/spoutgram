import Image from "next/image";
import Link from "next/link";

/*======================
    404 page
=======================*/

// .page_404{ padding:40px 0; background:#fff; font-family: 'Arvo', serif;
// }

// .page_404  img{ width:100%;}

// .four_zero_four_bg{

//  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
//     height: 400px;
//     background-position: center;
//  }

//  .four_zero_four_bg h1{
//  font-size:80px;
//  }

//   .four_zero_four_bg h3{
// 			 font-size:80px;
// 			 }

// 			 .link_404{
// 	color: #fff!important;
//     padding: 10px 20px;
//     background: #39ac31;
//     margin: 20px 0;
//     display: inline-block;}
// 	.contant_box_404{ margin-top:-50px;}

function Custom404() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <h1
        style={{
          fontSize: "20px",
          position: "absolute",
          top: "20%",
        }}
      >
        404 - Page Not Found
      </h1>
      <div
        style={{
          width: "700px",
        }}
      >
        <Image src={"/404.gif"} width={1000} height={1000} priority={true} />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          textAlign: "center",
        }}
      >
        <p
          style={{
            marginBottom: "15px",
          }}
        >
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          style={{
            padding: "10px",
            borderRadius: "8px",
            background: "#222",
            color: "#fff",
          }}
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default Custom404;
