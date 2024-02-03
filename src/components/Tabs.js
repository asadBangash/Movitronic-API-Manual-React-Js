import React, { useState, useEffect } from "react";
import generate from "../assets/images/regenerate-key.PNG";
import generate1 from "../assets/images/regenerate-key-copy.PNG";
// import ImageViewer from "react-image-viewer-zoom";
import ImageView from "react-single-image-viewer";
import "react-single-image-viewer/dist/index.css";
import "./tabs.css";
//test
const Tabs = () => {
  const [show, setShow] = useState(true);
  const [handle, setHandle] = useState(false);
  const [test, setTest] = useState("none");
  const [getallshares, setGetAllShares] = useState(`
  {
    "code": 200,
    "message": "Success",
    "status": "true",
    "data": [
      {
        "id": 1,
        "start_date": "2021-03-25 22:22:52",
        "end_date": "2021-03-29 22:54:10",
        "token": null,
        "status": "1",
        "vehicle_id": {
            "id": 1,
            "name": "Toyota",
            "tags": "sports",
            "year": "2050",
            "vehicle_company_id": 1,
            "vehicle_company_name": "Honda",
            "vehicle_model_id": 4,
            "vehicle_model_name": "500CC",
            "key_id": 6,
            "key_name": "B2c-0921",
            "license": "500",
            "can_update": true,
            "colour": "White",
            "doors": 2,
            "ignition": null,
            "door_button": 0,
            "trunk_button": 0,
            "detail": {
                "id": 1,
                "device_code": "DA1235",
                "fuel": 30,
                "latitude": 0,
                "longitude": 0,
                "doors": "false",
                "trunk": "false"
            },
            "file": "https://movitronicbucket2.s3.eu-north-1.amazonaws.com/2021-07-27-121640-wcJ8NX0lZP.png",
            "thumbnail": "http://127.0.0.1:8000/assets/images/default_vehicle.png",
            "user": {
                "id": 1,
                "code": null,
                "name": "Super Admin",
                "email": "superadmin@rentalmoose.com",
                "contact": "+923113233028",
                "type": "superadmin",
                "image": "https://movitronicbucket2.s3.eu-north-1.amazonaws.com/2021-08-26-165311-ZB1KK1Wi9A.png"
            },
            "active_shares": 1,
            "share_code": "266558",
            "label": {},
            "label_share": {},
            "usages": {
                "previos_usage": {},
                "current_usage": {
                    "id": 8,
                    "from": "357, Block N Shah Jamal Gulberg III, Lahore, Punjab 53700, Pakistan",
                    "to": "2, Napier Quarter, Karachi, Karachi City, Sindh, Pakistan"
                },
                "current_user": {
                    "id": 297,
                    "name": null,
                    "image": null
                }
            },
            "share": true,
            "deleted_at": false
        },
        "encryption": {
            "bluetooth_key": "AB1641719844",
            "bluetooth_slot": null
        }
        ],
        "meta": {
            "current_page": 1,
            "from": 1,
            "last_page": 1,
            "to": 1,
            "total": 1,
            "path": "http://localhost/rental-admin-panel/public/v1/shares"
        }
    }
  `);
  const [getSingleshare, setGetSingleShare] = useState(`
  {
    {
      "data": {
          "id": 79,
          "start_date": "2021-12-10 10:22:37",
          "end_date": "2021-12-10 18:21:37",
          "token": "1923023258",
          "status": "0",
          "vehicle_id": {
              "id": 55,
              "name": "Testing Vehicle",
              "tags": "sports",
              "year": "2030",
              "vehicle_company_id": 12,
              "vehicle_company_name": "abceP",
              "vehicle_model_id": 9,
              "vehicle_model_name": "Daimler Moto8",
              "key_id": 11,
              "key_name": "bc-001",
              "license": "500",
              "can_update": true,
              "colour": "white",
              "doors": 2,
              "ignition": "1",
              "door_button": 1,
              "trunk_button": 1,
              "detail": {
                  "id": 55,
                  "device_code": "0003e44b",
                  "fuel": 80,
                  "latitude": 31.5204,
                  "longitude": 74.3587,
                  "doors": "true",
                  "trunk": "true"
              },
              "file": "https://movitronicbucket2.s3.eu-north-1.amazonaws.com/2021-06-25-051526-wGl5C9choX.png",
              "thumbnail": "https://movitronicbucket2.s3.eu-north-1.amazonaws.com/2021-06-25-051526-xXrijtSIXv.png",
              "user": {
                  "id": 84,
                  "code": null,
                  "name": "Hello World 1",
                  "email": "hello@world.com",
                  "contact": "+923413396669",
                  "type": "operator",
                  "image": "https://movitronicbucket2.s3.eu-north-1.amazonaws.com/2021-09-01-174351-kUkD46qtoS.png"
              },
              "active_shares": 1,
              "share_code": "341653",
              "label": {
                  "id": 11,
                  "name": "movitronic",
                  "email": "test@whitelabel.com",
                  "contact_no": "+92333",
                  "color": "black",
                  "api_key": "thEMN571FqkX24bi1aI0ylS9Kdf598dM",
                  "file": "https://movitronicbucket2.s3.eu-north-1.amazonaws.com/2021-10-12-065000-JWpq9tABac.png",
                  "is_used": true,
                  "vehicle_id": 1,
                  "strip_key": "pk_test_51GzLtKLbPf34pHVYeJqkB7vSfnFMAO0uKmcI2sTPfJ9RjgqCqaScXYFp5C9WfanyaM14Y7ebAXhwMXtMvBAT1IO400h8hJYwAq",
                  "strip_secret": "sk_test_51GzLtKLbPf34pHVY6cPVWHIejcFWwc2yicFWx4nLe06waWsa0o7L1h2A2h0U6xeUIqiBoe8ab58EuNs6OGsFliWf00PyDrPGLK"
              },
              "label_share": {
                  "id": 3,
                  "hprice": "250",
                  "dprice": "500",
                  "label_id": "11",
                  "vehicle_id": 55
              },
              "usages": {
                  "previos_usage": {
                      "id": 74,
                      "from": "43 Gurumangat Rd, Block N Gulberg III, Lahore, Punjab, Pakistan",
                      "to": null
                  },
                  "current_usage": {
                      "id": 75,
                      "from": "43 Gurumangat Rd, Block N Gulberg III, Lahore, Punjab, Pakistan",
                      "to": null
                  },
                  "current_user": {
                      "id": 277,
                      "name": "vehicle",
                      "image": "https://movitronicbucket2.s3.eu-north-1.amazonaws.com/2021-08-16-132101-4XHvYbCbO6.png"
                  }
              },
              "share": true,
              "deleted_at": false
          },
          "encryption": {
              "bluetooth_key": null,
              "bluetooth_slot": null
          }
      }
  }
  `);

  const [updateshares, setUpdateShares] = useState(`
  {
    "code": 200,
    "data": {
            "id": 1,
            "start_date": "2021-03-25 17:22:52",
            "end_date": "2021-03-29 17:54:10",
            "token": "987654321",
            "status": "1",
            "bluetooth_key": "AB404448322",
            "vehicles_id": {
                "id": 1,
                "name": "Carolla",
                "tags": "sports",
                "year": "2015",
                "company_name": "Honda",
                "model_name": "500CC",
                "key_name": "B2c-0921",
                "key": {
                    "id": 1,
                    "name": "B2c-0921",
                    "model": {
                        "id": 1,
                        "name": "500CC",
                        "company": {
                            "id": 1,
                            "name": "Honda"
                        }
                    }
                },
                "detail": {
                    "id": 1,
                    "device_code": "D-700",
                    "fuel": 0,
                    "latitude": 0,
                    "longitude": 0,
                    "doors": 0,
                    "trunk": 0
                },
                "license": "500",
                "colour": null,
                "doors": "2",
                "ignition": "1",
                "image": "http://localhost/rental-admin-panel/public/storage/2021-03-18-135507-yFjMidsXka.png",
                "user": {
                    "id": 4,
                    "code": "MV-0000001",
                    "name": "Tester",
                    "email": "shahidhussainumt@gmail.com",
                    "contact": null,
                    "type": "operator",
                    "image": "http://localhost/rental-admin-panel/public/assets/images/default_car.jpg"
                },
                "active_shares": 0,
                "usages": {
                    "previos_usage": {},
                    "current_usage": {},
                    "current_user": {}
                },
                "share": false,
                "deleted_at": false
            }
        },
        "status": "true",
        "message": "Sass Share Created Successfully"
    }
  `);

  const [createshares, setCreateShares] = useState(`
  {
    "code": 200,
    "message": "Data Updated Successfully",
    "data": {
            "id": 1,
            "start_date": "2021-03-27 17:22:52",
            "end_date": "2021-03-29 17:22:52",
            "token": "987654321",
            "status": "0",
            "bluetooth_key": "AB404448322",
            "vehicles_id": {
                "id": 1,
                "name": "Carolla",
                "tags": "sports",
                "year": "2015",
                "company_name": "Honda",
                "model_name": "500CC",
                "key_name": "B2c-0921",
                "key": {
                    "id": 1,
                    "name": "B2c-0921",
                    "model": {
                        "id": 1,
                        "name": "500CC",
                        "company": {
                            "id": 1,
                            "name": "Honda"
                        }
                    }
                },
                "detail": {
                    "id": 1,
                    "device_code": "D-700",
                    "fuel": 0,
                    "latitude": 0,
                    "longitude": 0,
                    "doors": 0,
                    "trunk": 0
                },
                "license": "500",
                "colour": null,
                "doors": "2",
                "ignition": "1",
                "image": "http://localhost/rental-admin-panel/public/storage/2021-03-18-135507-yFjMidsXka.png",
                "user": {
                    "id": 4,
                    "code": "MV-0000001",
                    "name": "Tester",
                    "email": "shahidhussainumt@gmail.com",
                    "contact": null,
                    "type": "operator",
                    "image": "http://localhost/rental-admin-panel/public/assets/images/default_car.jpg"
                },
                "active_shares": 0,
                "usages": {
                    "previos_usage": {},
                    "current_usage": {},
                    "current_user": {}
                },
                "share": false,
                "deleted_at": false
            }
        },
    "status": "true"
}
  `);

  const [token, setToken] = useState(`
{
  "message": "Unauthenticated.",
  "data": [
      "Unauthenticated."
  ],
  "status": 401
}
`);
  const [errorshare, setErrorShare] = useState(`
{
  "code": 400,
  "status": "false",
  "message": "All Fields are required",
  "data": {
          "share_type": "The share type field is required."
          }
}
`);
const [erroruniqueid, setUniqueId] = useState(`
{
  "code": 400,
  "status": "false",
  "message": "There is no share against this unique id",
  "data": []
}
`);
const [apikey, setErrorApiKey] = useState(`
{
  "code": 401,
  "status": "false",
  "message": "Unauthorized User.",
  "data": []
}
`);
  const [doorortrunk, setDoorOrTrunk] = useState(`
{
  "cmd":"true or false"
}
`);
  const [heartbeat, setHeartBeat] = useState(`
{
  "fuel":"0",
  "latitude":"",
  "longitude":"0",
  "doors":"open",
  "trunk":"open",
}  
`);
  const [fuel, setFuel] = useState(`
{
  "cmd":"true or false"
}
`);
  const [heartbeat1, setHeartBeat1] = useState(`
{
  "code": 200,
  "data": [],
  "status": "true",
  "message": "vehicle data updated"
} 
`);
  const [fuel1, setFuel1] = useState(`
{
  "code": 200,
  "data": {
      "fuel": "0",
      "car_id": "1"
  },
  "status": "true",
  "message": "Success"
} 
`);
  const [door, setDoor] = useState(`
{
  "code": 200,
  "data": {
      "door": 1,
      "car_id": "1"
      },
  "status": "true",
  "message": "Success"
}
`);
  const [trunk, setTrunk] = useState(`
{
  "code": 200,
  "data": {
      "trunk": 1,
      "car_id": "1"
      },
  "status": "true",
  "message": "Success"
}
`);
  const [version, setVersion] = useState(`

-----------------------------------------------------------------------------------------
Version 1.0 - March 24th, 2021
-----------------------------------------------------------------------------------------
 
- launch rentalmoose admin panel
`);
  const callme = () => {
    if (window.innerWidth <= 768 && window.innerWidth <= 768) {
      setHandle(true);
    } else {
      setHandle(false);
    }
  };
  window.addEventListener("resize", callme);

  const showSidebar = async () => {
    console.log("click me");
    setShow(true);
  };

  const [url, setUrl] = useState(`https://dev.movitronic.com/v1/shares/list`);
  const [urlSingle, setUrlSingle] = useState(`https://dev.movitronic.com/v1/shares/get`);
  const [urlcreateshare, setUrlCreateShare] = useState(
    `https://dev.movitronic.com/v1/shares/create`
  );
  const [urlupdateshare, setUrlUreateShare] = useState(
    `https://dev.movitronic.com/v1/share/update`
  );
  const [commandapi, setUrlCommandApi] = useState(
    `https://dev.movitronic.com/v1/command`
  );

  const [error, setError] = useState(
    `  Line 121:19:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid`
  );
  return (
    <div class="wrapper">
      {show ? (
        <nav id="sidebar">
          <div class="sidebar-header d-flex justify-content-between">
            <h3>Movitronic Api</h3>
            <div className="dismiss dismiss-class">
              <i class="fas fa-arrow-left"></i>
            </div>
          </div>

          <ul class="list-unstyled components">
            {/* <p>Dummy Heading</p> */}
            <li className="dismiss">
              <a href="#intro">Introduction</a>
            </li>
            <li className="dismiss">
              <a href="#how_to_get_token">How to Get Token</a>
            </li>
            <li class="active">
              <a
                href="#homeSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                Shares API
              </a>
              <ul
                class="collapse list-unstyled"
                id="homeSubmenu"
                // onClick={handle ? () => setShow(false) : null}
              >
                <li className="dismiss">
                  <a href="#all-shares">Get All Shares</a>
                </li>
                <li className="dismiss">
                  <a href="#single-share">Get Single Share</a>
                </li>
                <li className="dismiss">
                  <a href="#create-shares">Create Share</a>
                </li>
                <li className="dismiss">
                  <a href="#update-shares">Update Share</a>
                </li>
              </ul>
            </li>
            <li className="dismiss">
              <a href="#command-api">Command Api</a>
            </li>
            <li>
              <a href="https://rentalmoose.com/contact">Support Desk</a>
            </li>
            <li className="dismiss">
              <a href="#versionhistory">Version History</a>
            </li>
            <li className="dismiss">
              <a href="#copyright">Copyright and license</a>
            </li>
          </ul>
        </nav>
      ) : null}

      <div id="content">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid text-center d-flex justify-content-center">
            <button
              type="button"
              id="sidebarCollapse"
              class="btn btn-info text-center"
            >
              <i class="fas fa-align-left"></i>
            </button>
            <h3 className="text-center">Rentalmoose Sass Api documentation</h3>
            {/* <p onClick={showSidebar}>Click me</p> */}
            {/* <button type="button" id="sidebarCollapse" class="btn btn-info">
              <i class="fas fa-align-left"></i>
              <span>Toggle Sidebar</span>
            </button> */}

            {/* <p>Version 1.0</p> */}

            {/* <button
              class="btn btn-dark d-inline-block d-lg-none ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-align-justify"></i>
            </button> */}

            {/* <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="nav navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    Page
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Page
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Page
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Page
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </nav>

        {/* 1st section intro*/}

        <div className="row mt-5" id="intro">
          <div className="documentation col-xl-6 col-lg-6 ">
            <h1>Introduction</h1>
            <b>Item Name :</b> RentalMoose Car Rental Broker <br></br>
            <b>Item Version : </b> v 1.0 <br></br>
            <b>License :</b> Un License <br></br>
            <br></br>
            <p>
              Rentalmoose.com is a global car rental brokers website where you
              can rent a car from more than 15 000 locations. To remain update
              you can visit our official{" "}
              <a href="https://movitronic.com/">site</a> and for latest news
              please <a href="https://movitronic.com/">visit here</a>.<br></br>{" "}
              <br></br>
              <b>We have:</b> <br></br>
              1. 15 000+ different locations globally <br></br>
              2. Over 90 0000 cars available <br></br>
              3. Top rated rental car brands like Europcar, Enterprise, ACE,
              Hertz <br></br>
              This documentation is to help you regarding how you can use our
              services for your company using our given api's.
            </p>
            <h6>Requirements</h6>
            <p>
              You will first need to purchase rentalmoose device from store.
            </p>
          </div>
          {/* <div className="boxes col-xl-6 col-lg-6 col-12">
            <div
              className="box1"
              style={{
                overflow: "auto",
              }}
            >
              <strong>URL</strong>
              <div className="url-box" style={{ overflow: "auto" }}>
                <span className="url-text">Get</span>
                <span className="url" style={{ margin: "0px 10px" }}>
                  {url}
                </span>
              </div>
            </div>
            <div className="box2">
              <strong>HTTP Response</strong>
              <div className="json-response">
                <pre
                  style={{
                    overflow: "auto",
                    height: "500px",
                  }}
                >
                  <code className="language-JSON text-white">{code}</code>
                </pre>
              </div>
            </div>
            <div className="box3">
              <strong>Errors</strong>
              <div
                className="error-box  p-3"
                style={{ overflow: "auto", backgroundColor: "#6e6c68" }}
              >
                <p
                  className="request text-center text-white"
                  style={{ fontWeight: "600" }}
                >
                  Error
                </p>
                <span className="error-text ">{error}</span>
              </div>
            </div>
          </div> */}
        </div>
        <hr></hr>
        {/* 2nd section How to get token*/}

        <div className="row mt-5" id="how_to_get_token">
          <div className="documentation col-xl-6 col-lg-6 ">
            <h1>How to Get Token</h1>
            <p>
              When you purchase your device you can add your vehicle here. You
              have to register first here. and then have to add your vehicles.
            </p>
            <ImageView src={generate} height="100px" width="200px" />
            <ImageView src={generate1} height="100px" width="200px" /><br></br>
            <h1>Description</h1>
            <p>
            A token is a random string for a user to prove their identity in a login process. It is typically used as a form of identification for physical access or as a method of computer system access. The token can be an item or a card that displays or contains security information about a user and can be verified by the system.
Token is based on the use of a device that generates a random number, encrypts it and sends it to a server with user authentication information. The server then sends back an encrypted response that can only be decrypted by the device. The device is reused for every authentication, so the server does not have to store any username or password information, with the intent of making the system less vulnerable to hacking.

            </p>

          </div>
          <div className="boxes col-xl-6 col-lg-6 col-12">
            <div className="box2">
              <strong>Error</strong>
              <div className="json-response">
                <pre
                  style={{
                    overflow: "auto",
                    height: "200px",
                  }}
                >
                  <code className="language-JSON text-white">{token}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>

        {/* 2nd Section */}

        <div className="row mt-5" id="all-shares">
          <div className="documentation col-xl-6 col-lg-6 ">
            <h1>Get All Shares</h1>
            <p>
              Rentalmoose provide you facility to view all your shares vehicles
              listing that you shared your vehicle. You can use this api to view
              listing. You can view two type of listing by sending api_key in request.
            </p>
            1. Available <br></br>
            2. Expire<br></br>
            <h1>Description</h1>
                <p>
                Get all shares shows you Listings of all the vehicles that you have shared. Each Listing is associated with a User, and with a Vehicle (Users own Vehicles.) Shares Listings have a start date, and are valid till specified end date.<br></br>
By default, it returns all active Shares with pagination. <br></br>
If you want to see active shares then you have to write <strong>available</strong> in share_type field and if you want to see expired shares then you write <strong>expired</strong> in share_type field.

                </p>
            <br></br>
            <div style={{ overflow: "auto" }}>
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th>Property</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>share_type</td>
                    <td>available or expire</td>
                  </tr>
                  <tr>
                    <td>api_key</td>
                    <td>[api key provided by movitronic]</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h6>Errors</h6>
            <div style={{ overflow: "auto" }}>
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th>Property</th>
                    <th>Description</th>
                    <th>Error Type</th>
                    <th>Error code</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>share_type</td>
                    <td>The share type field is required.</td>
                    <td>Validation Error</td>
                    <td>400</td>
                  </tr>
                  <tr>
                    <td>api_key</td>
                    <td>Must provide valid api_key.</td>
                    <td>Invalid api_key</td>
                    <td>401</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
          </div>
          <div className="boxes col-xl-6 col-lg-6 col-12">
            <div
              className="box1"
              style={{
                overflow: "auto",
              }}
            >
              <strong>End Point</strong>
              <div className="url-box" style={{ overflow: "auto" }}>
              <pre>
                  <span className="url-text">GET</span>
                  <code className="language-HTTP text-white ">
                    <span
                      className="urlcreateshare"
                      style={{ margin: "0px 10px" }}
                    >
                      {url}
                    </span>
                  </code>
                </pre>
              </div>
            </div>
            <br></br>
            <div className="box2">
              <strong>Example Response</strong>
              <div className="json-response">
                <pre
                  style={{
                    overflow: "auto",
                    height: "500px",
                  }}
                >
                  <code className="language-JSON text-white">
                    {getallshares}
                  </code>
                </pre>
              </div>
            </div>
            <div className="box2">
              <strong>ShareType Error</strong>
              <div className="json-response">
                <pre
                  style={{
                    overflow: "auto",
                    height: "300px",
                  }}
                >
                  <code className="language-JSON text-white">{errorshare}</code>
                </pre>
              </div>
            </div>
            <div className="box2">
              <strong>Invalid api_key Error</strong>
              <div className="json-response">
                <pre
                  style={{
                    overflow: "auto",
                    height: "300px",
                  }}
                >
                  <code className="language-JSON text-white">{apikey}</code>
                </pre>
              </div>
            </div>
            {/* <div className="box3">
              <strong>Errors</strong>
              <div
                className="error-box  p-3"
                style={{ overflow: "auto", backgroundColor: "#6e6c68" }}
              >
                <p
                  className="request text-center text-white"
                  style={{ fontWeight: "600" }}
                >
                  Error
                </p>
                <span className="error-text ">{error}</span>
              </div>
            </div> */}
          </div>
        </div>
        <hr></hr>

        {/* end of 2nd section */}
        {/* 3rd Section */}

        <div className="row mt-5" id="single-share">
          <div className="documentation col-xl-6 col-lg-6 ">
            <h1>Get Single Share</h1>
            <p>
              Rentalmoose provide you facility to view single active share by sending api_key in request and unique token.
            </p>
            
            <h1>Description</h1>
                <p>
                Get single share shows you active share against the vehicle that you have shared.  <br></br>
                <br></br>
                To do this you need to provide api_key and unique_id in params.


                </p>
            <br></br>
            <div style={{ overflow: "auto" }}>
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th>Property</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>api_key</td>
                    <td>[api key provided by movitronic]</td>
                  </tr>
                  <tr>
                    <td>unique_id</td>
                    <td>[unique_id]</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h6>Errors</h6>
            <div style={{ overflow: "auto" }}>
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th>Property</th>
                    <th>Description</th>
                    <th>Error Type</th>
                    <th>Error code</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>unique_id</td>
                    <td>provide valid unique_id.</td>
                    <td>Invalid unique_id Error</td>
                    <td>400</td>
                  </tr>
                  <tr>
                    <td>api_key</td>
                    <td>Must provide valid api_key.</td>
                    <td>Invalid api_key</td>
                    <td>401</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
          </div>
          <div className="boxes col-xl-6 col-lg-6 col-12">
            <div
              className="box1"
              style={{
                overflow: "auto",
              }}
            >
              <strong>End Point</strong>
              <div className="url-box" style={{ overflow: "auto" }}>
              <pre>
                  <span className="url-text">GET</span>
                  <code className="language-HTTP text-white ">
                    <span
                      className="urlcreateshare"
                      style={{ margin: "0px 10px" }}
                    >
                      {urlSingle}
                    </span>
                  </code>
                </pre>
              </div>
            </div>
            <br></br>
            <div className="box2">
              <strong>Example Response</strong>
              <div className="json-response">
                <pre
                  style={{
                    overflow: "auto",
                    height: "500px",
                  }}
                >
                  <code className="language-JSON text-white">
                    {getSingleshare}
                  </code>
                </pre>
              </div>
            </div>
            <div className="box2">
              <strong>UniqueID Error</strong>
              <div className="json-response">
                <pre
                  style={{
                    overflow: "auto",
                    height: "300px",
                  }}
                >
                  <code className="language-JSON text-white">{erroruniqueid}</code>
                </pre>
              </div>
            </div>
            <div className="box2">
              <strong>Invalid api_key Error</strong>
              <div className="json-response">
                <pre
                  style={{
                    overflow: "auto",
                    height: "300px",
                  }}
                >
                  <code className="language-JSON text-white">{apikey}</code>
                </pre>
              </div>
            </div>
            {/* <div className="box3">
              <strong>Errors</strong>
              <div
                className="error-box  p-3"
                style={{ overflow: "auto", backgroundColor: "#6e6c68" }}
              >
                <p
                  className="request text-center text-white"
                  style={{ fontWeight: "600" }}
                >
                  Error
                </p>
                <span className="error-text ">{error}</span>
              </div>
            </div> */}
          </div>
        </div>
        <hr></hr>

        {/* end of 3rd section */}
        

        {/* start of create share */}

        <div className="row mt-5" id="create-shares">
          <div className="documentation col-xl-6 col-lg-6 ">
            <h1>Create Share</h1>
            <p>You can share your vehicle by creating it using this api.</p>
            <br></br>
            <h1>Description</h1>
            <p>
            The Shares Create API allows users to insert records into the system. The HTTP request URI you use to insert a new recording contains a vehicle_id, share_type and a token that let you create a share on the system.<br></br>
            This API uses a different authentication model than the other SaaS APIs. For those APIs, you make a request with a username and password that belong to a normal user of the rentalmoose environment who also exists in Configuration Server. To use this Share Create API, the HTTP request must send a Basic Authentication header with the Username and UserPassword.<br></br>
            As with any POST request to rentalmoose, you must add the Cross Site Request Forgery Protection (CSRF) headers to the requests.
            </p>
            

            <div style={{ overflow: "auto" }}>
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th>Property</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>start_date</td>
                    <td>future start date</td>
                  </tr>
                  <tr>
                    <td>end_date</td>
                    <td>future end date</td>
                  </tr>
                  <tr>
                    <td>vehicles_id</td>
                    <td>vehicle id that you want to share</td>
                  </tr>
                  <tr>
                    <td>token</td>
                    <td>your unique token</td>
                  </tr>
                  <tr>
                    <td>access_type</td>
                    <td>
                      What type of access you want to provide to share person
                    </td>
                  </tr>
                  <tr>
                    <td>via</td>
                    <td>You have to enter your company name here</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br></br>
            <h6>Errors</h6>
            <div style={{ overflow: "auto" }}>
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th>Property</th>
                    <th>Description</th>
                    <th>Error Type</th>
                    <th>Error code</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>share_type</td>
                    <td>The share type field is required.</td>
                    <td>Validation Error</td>
                    <td>400</td>
                  </tr>
                  <tr>
                    <td>share_date</td>
                    <td>Share dates expired.</td>
                    <td>Date Error</td>
                    <td>401</td>
                  </tr>
                  <tr>
                    <td>vehicle_id</td>
                    <td>Given vehicle id not found.</td>
                    <td>Vehicle Error</td>
                    <td>404</td>
                  </tr>
                  <tr>
                    <td>shares</td>
                    <td>share_not_enable.</td>
                    <td>Share Error</td>
                    <td>401</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="boxes col-xl-6 col-lg-6 col-12">
            <div
              className="box1"
              style={{
                overflow: "auto",
              }}
            >
              <strong>End Point</strong>
              <div className="url-box" style={{ overflow: "auto" }}>
              <pre>
                  <span className="url-text">POST</span>
                  <code className="language-HTTP text-white ">
                    <span
                      className="urlcreateshare"
                      style={{ margin: "0px 10px" }}
                    >
                      {urlcreateshare}
                    </span>
                  </code>
                </pre>
              </div>
            </div>
            <br></br>
            <div className="box2">
              <strong>Header </strong>
              <div className="json-response">
                <pre
                  style={{
                    overflow: "auto",
                    height: "80px",
                  }}
                >
                  <code className="language-JSON text-white">
                    <span>Accept : Application/json</span>
                  </code>
                </pre>
              </div>
            </div>
            <div className="box2">
              <strong>Example Response</strong>
              <div className="json-response">
                <pre
                  style={{
                    overflow: "auto",
                    height: "500px",
                  }}
                >
                  <code className="language-JSON text-white">
                    {createshares}
                  </code>
                </pre>
              </div>
            </div>
            <div className="box2">
              <strong>Error</strong>
              <div className="json-response">
                <pre
                  style={{
                    overflow: "auto",
                    height: "300px",
                  }}
                >
                  <code className="language-JSON text-white">{errorshare}</code>
                </pre>
              </div>
            </div>
            {/* <div className="box3">
              <strong>Errors</strong>
              <div
                className="error-box  p-3"
                style={{ overflow: "auto", backgroundColor: "#6e6c68" }}
              >
                <p
                  className="request text-center text-white"
                  style={{ fontWeight: "600" }}
                >
                  Error
                </p>
                <span className="error-text ">{error}</span>
              </div>
            </div> */}
          </div>
        </div>
        <hr></hr>
        {/* end of create share */}

        {/* start of command api */}

        <div className="row mt-5" id="update-shares">
          <div className="documentation col-xl-6 col-lg-6 ">
            <h1>Update Share</h1>
            <p>You can update your shared share using this api.</p>
            <h1>Description</h1>
            <p>
            The Shares Update API allows users to update his shares. The HTTP request URI you use to update a share's end_date, access_type etc.<br></br>
            It requires specific shares_id that you are going to edit.
            This API uses a different authentication model than the other SaaS APIs. For those APIs, you make a request with a username and password that belong to a normal user of the rentalmoose environment who also exists in Configuration Server. To use this Share Create API, the HTTP request must send a Basic Authentication header with the Username and UserPassword.<br></br>
            As with any POST request to rentalmoose, you must add the Cross Site Request Forgery Protection (CSRF) headers to the requests.
            </p>
            <div style={{ overflow: "auto" }}>
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th>Property</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>share_type</td>
                    <td>future start date</td>
                  </tr>
                  <tr>
                    <td>end_date</td>
                    <td>future end date</td>
                  </tr>
                  <tr>
                    <td>vehicles_id</td>
                    <td>vehicle id that you want to share</td>
                  </tr>
                  <tr>
                    <td>token</td>
                    <td>your unique token</td>
                  </tr>
                  <tr>
                    <td>access_type</td>
                    <td>
                      What type of access you want to provide to share person
                    </td>
                  </tr>
                  <tr>
                    <td>via</td>
                    <td>You have to enter your company name here</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br></br>
            <h6>Errors</h6>
            <div style={{ overflow: "auto" }}>
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th>Property</th>
                    <th>Description</th>
                    <th>Error Type</th>
                    <th>Error code</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>share_type</td>
                    <td>The share type field is required.</td>
                    <td>Validation Error</td>
                    <td>400</td>
                  </tr>
                  <tr>
                    <td>share_date</td>
                    <td>Share dates expired.</td>
                    <td>Date Error</td>
                    <td>401</td>
                  </tr>
                  <tr>
                    <td>vehicle_id</td>
                    <td>Given vehicle id not found.</td>
                    <td>Vehicle Error</td>
                    <td>404</td>
                  </tr>
                  <tr>
                    <td>shares</td>
                    <td>share_not_enable.</td>
                    <td>Share Error</td>
                    <td>401</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="boxes col-xl-6 col-lg-6 col-12">
            <div
              className="box1"
              style={{
                overflow: "auto",
              }}
            >
              <strong>End Point</strong>
              <div className="url-box" style={{ overflow: "auto" }}>
              <pre>
                  <span className="url-text">POST</span>
                  <code className="language-HTTP text-white ">
                    <span
                      className="urlcreateshare"
                      style={{ margin: "0px 10px" }}
                    >
                      {urlupdateshare}
                    </span>
                  </code>
                </pre>
              </div>
            </div>
            <br></br>
            <div className="box2">
              <strong>Header </strong>
              <div className="json-response">
                <pre
                  style={{
                    overflow: "auto",
                    height: "80px",
                  }}
                >
                  <code className="language-JSON text-white">
                    <span>Accept : Application/json</span>
                  </code>
                </pre>
              </div>
            </div>
            <div className="box2">
              <strong>Example Response</strong>
              <div className="json-response">
                <pre
                  style={{
                    overflow: "auto",
                    height: "500px",
                  }}
                >
                  <code className="language-JSON text-white">
                    {updateshares}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        {/* end of update share */}

        {/* start of Command api */}

        <div className="row mt-5" id="command-api">
          <div className="documentation col-xl-6 col-lg-6 ">
            <h1>Command API</h1>
            <p>
              This api will provide you control on your device. You can use
              command door and trunk to control them either to open or close
              them. We are also providing you heartbeat and fuel command.
            </p>

            <br></br>
            <h6>Body</h6>
            <div style={{ overflow: "auto" }}>
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th>Property</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>command</td>
                    <td>door/trunk</td>
                    
                  </tr>
                  <tr>
                    <td>unique_id</td>
                    <td> [unique_id]</td>
                    
                  </tr>
                  <tr>
                    <td>api_key</td>
                    <td>[api key provided by movitronic] </td>
                    
                  </tr>
                  <tr>
                    <td>vehicle_id</td>
                    <td>[vehicle_id]</td>
                    
                  </tr>
                  <tr>
                    <td>data</td>
                    <td>['doors','fuel','heartbeat','trunk']</td>
                    
                  </tr>
                  <tr>
                    <td>extra_param</td>
                    <td>[only if you want to parse and want to get it. format of it must be json]</td>
                    
                  </tr>
                </tbody>
              </table>
            </div>

            <br></br>
            <h6>Errors</h6>
            <div style={{ overflow: "auto" }}>
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th>Property</th>
                    <th>Description</th>
                    <th>Error Type</th>
                    <th>Error code</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>vehicle_id</td>
                    <td>Given vehicle id not found.</td>
                    <td>Not found Error</td>
                    <td>403</td>
                  </tr>
                  <tr>
                    <td>share_id</td>
                    <td>No share againt this vehicle.</td>
                    <td>Not found Error</td>
                    <td>403</td>
                  </tr>
                  <tr>
                    <td>vehicle_id</td>
                    <td>Access Denied! No permission to proceed with this. </td>
                    <td>Permission Error </td>
                    <td>403</td>
                  </tr>
                  <tr>
                    <td>shares</td>
                    <td>This share is not available.</td>
                    <td>Share Error</td>
                    <td>403</td>
                  </tr>
                  <tr>
                    <td>shares</td>
                    <td>Looks like tcp is not connected yet.</td>
                    <td>TCP Socket Error</td>
                    <td>401</td>
                  </tr>
                  <tr>
                    <td>shares</td>
                    <td>All Fields are required.</td>
                    <td>Validation Error</td>
                    <td>400</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="boxes col-xl-6 col-lg-6 col-12">
            <div
              className="box1"
              style={{
                overflow: "auto",
              }}
            >
              <strong>End Point</strong>
              <div className="url-box" style={{ overflow: "auto" }}>
              <pre>
                  <span className="url-text">POST</span>
                  <code className="language-HTTP text-white ">
                    <span
                      className="urlcreateshare"
                      style={{ margin: "0px 10px" }}
                    >
                      {commandapi}
                    </span>
                  </code>
                </pre>
              </div>
            </div>
            <br></br>
            <div className="box2">
              <strong>Header </strong>
              <div className="json-response">
                <pre
                  style={{
                    overflow: "auto",
                    height: "80px",
                  }}
                >
                  <code className="language-JSON text-white">
                    <span>Accept : Application/json</span>
                  </code>
                </pre>
              </div>
            </div>
            <div className="box2">
              <strong>
                If your command is doors, or trunk then data must be this
              </strong>
              <div className="json-response">
                <pre
                  style={{
                    overflow: "auto",
                    height: "120px",
                  }}
                >
                  <code className="language-JSON text-white">
                    {doorortrunk}
                  </code>
                </pre>
              </div>
            </div>
            <div className="box2">
              <strong>
                If your command is heartbeat then data must be this
              </strong>
              <div className="json-response">
                <pre
                  style={{
                    overflow: "auto",
                    height: "200px",
                  }}
                >
                  <code className="language-JSON text-white">{heartbeat}</code>
                </pre>
              </div>
            </div>
            <div className="box2">
              <strong>If your command is fuel then data must be this</strong>
              <div className="json-response">
                <pre
                  style={{
                    overflow: "auto",
                    height: "120px",
                  }}
                >
                  <code className="language-JSON text-white">{fuel}</code>
                </pre>
              </div>
            </div>
            <div className="box2">
              <strong>
                If your command is heartbeat then response will be like this:
              </strong>
              <div className="json-response">
                <pre
                  style={{
                    overflow: "auto",
                    height: "200px",
                  }}
                >
                  <code className="language-JSON text-white">{heartbeat1}</code>
                </pre>
              </div>
            </div>
            <div className="box2">
              <strong>If your command is fuel</strong>
              <div className="json-response">
                <pre
                  style={{
                    overflow: "auto",
                    height: "210px",
                  }}
                >
                  <code className="language-JSON text-white">{fuel1}</code>
                </pre>
              </div>
            </div>
            <div className="box2">
              <strong>If your command is doors</strong>
              <div className="json-response">
                <pre
                  style={{
                    overflow: "auto",
                    height: "210px",
                  }}
                >
                  <code className="language-JSON text-white">{door}</code>
                </pre>
              </div>
            </div>
            <div className="box2">
              <strong>If your command is trunk</strong>
              <div className="json-response">
                <pre
                  style={{
                    overflow: "auto",
                    height: "250px",
                  }}
                >
                  <code className="language-JSON text-white">{trunk}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        {/* end of command api */}
        {/* start of version  */}

        <div className="row mt-5" id="versionhistory">
          <div className="documentation col-xl-12 col-lg-12 ">
            <h1>Version History</h1>

            <div className="box2">
              <div className="json-response">
                <pre
                  style={{
                    overflow: "auto",
                    height: "210px",
                  }}
                >
                  <code className="language-JSON text-white">{version}</code>
                </pre>
              </div>
            </div>
          </div>
          <div className="boxes col-xl-6 col-lg-6 col-12"></div>
        </div>
        <hr></hr>
        {/* end of version  */}

        {/* start of copright and license  */}

        <div className="row mt-5" id="copyright">
          <div className="documentation col-xl-12 col-lg-12 ">
            <h1>Copyright and license</h1>

            <p>Code released under the Rentalmoose License.</p>
            <br></br>
            <p>
              For more information about copyright and license check
              choosealicense.com.
            </p>
          </div>
          <div className="boxes col-xl-6 col-lg-6 col-12"></div>
        </div>
        <hr></hr>
        {/* end of copright and license  */}
      </div>
    </div>
  );
};

export default Tabs;
