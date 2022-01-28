import { useEffect, useState } from "react";
import Image from 'next/image'
// import { WOW } from "wowjs";

function Service() {
  const [open, setOpen] = useState("p2");
  // useEffect(() => {
  //   const wow = new WOW({
  //     offset: 100,
  //     mobile: false,
  //     live: true,
  //   });

  //   wow.init();
  // }, []);
  return (
    <>
      <section
        className="content-inner-2 wow fadeInUp"
        style={{ backgroundImage: "url(images/background/bg1.png)" }}
      >
        <div className="container">
          <div className="section-head style-1 text-center">
            <h6 className="sub-title bgl-primary m-b20 text-primary">
              Services
            </h6>
            <h2 className="title">Services We Provide</h2>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div
                className={`${
                  open === "p1"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p1")}
              >
                <div className="icon-bx-md radius bg-yellow shadow-yellow">
                  <a href="javascript:void(0);" className="icon-cell">
                    {/* <i className="flaticon-hard-drive"></i> */}
                    <img src="/images/hard-drive.png" />
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">Hard Disk Recovery</h4>
                  <p>
                    These cases include burned hard drives, water damage, data corruption, crashed hard drives, viruses, broken hard drives, and electrical surges.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.6s"
            >
              <div
                className={`${
                  open === "p2"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p2")}
              >
                <div className="icon-bx-md radius bg-red shadow-red">
                  <a href="javascript:void(0);" className="icon-cell">
                    {/* <i className="flaticon-pie-charts"></i> */}
                    <img src="/images/memory.png" />
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">Memory Card Recovery</h4>
                  <p className="text-small">
                    I forgot my password ?. I know my password, but can't sign in ?. Problems with password ?. We will help you with password recovery tool.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.6s"
            >
              <div
                className={`${
                  open === "p3"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p3")}
              >
                <div className="icon-bx-md radius bg-green shadow-green">
                  <a href="javascript:void(0);" className="icon-cell">
                    {/* <i className="flaticon-pie-charts"></i> */}
                    <img src="/images/ransomware.png" />
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">Ransomware Recovery</h4>
                  <p>
                    Is your computer system infected by CTB Virus or encrypting ransom ware infections, Don't worry..We are here to recover your data safely.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
              <div
                className={`${
                  open === "p4"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p4")}
              >
                <div className="icon-bx-md radius bg-green shadow-green">
                  <a href="javascript:void(0);" className="icon-cell">
                    {/* <i className="flaticon-website"></i> */}
                    <img src="/images/image.png" />
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">Photos Recovery</h4>
                  <p>
                    Photos recovery was a tough problem in the past, but it is no longer difficult now since we have great software for the recovery.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.6s"
            >
              <div
                className={`${
                  open === "p5"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p5")}
              >
                <div className="icon-bx-md radius bg-yellow shadow-yellow">
                  <a href="javascript:void(0);" className="icon-cell">
                    {/* <i className="flaticon-pie-charts"></i> */}
                    <img src="/images/usb.png" />
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">Pen Drive Recovery</h4>
                  <p>
                  Pen Drive Data Recovery will allow to recover the corrupt data from pen drive. Tool will also allow restore formatted & deleted USB data.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.6s"
            >
              <div
                className={`${
                  open === "p6"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p6")}
              >
                <div className="icon-bx-md radius bg-red shadow-red">
                  <a href="javascript:void(0);" className="icon-cell">
                    {/* <i className="flaticon-pie-charts"></i> */}
                    <img src="/images/delete.png" />
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">Deleted Files Recovery</h4>
                  <p>
                    Yes, it is possible to recover deleted files. Try Recycle Bin first, but if it is not there, At Roots Data Recovery.. We can recover deleted files, too.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.6s"
            >
              <div
                className={`${
                  open === "p7"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p7")}
              >
                <div className="icon-bx-md radius bg-red shadow-red">
                  <a href="javascript:void(0);" className="icon-cell">
                    {/* <i className="flaticon-pie-charts"></i> */}
                    <img src="/images/secure.png" />
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">Password Recovery</h4>
                  <p>
                    I forgot my password ?. I know my password, but can't sign in ?. Problems with password ?. We will help you with password recovery tool.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.6s"
            >
              <div
                className={`${
                  open === "p8"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p8")}
              >
                <div className="icon-bx-md radius bg-green shadow-green">
                  <a href="javascript:void(0);" className="icon-cell">
                    {/* <i className="flaticon-pie-charts"></i> */}
                    <img src="/images/secure.png" />
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">Bitlocker Recovery</h4>
                  <p>
                    I forgot my bitlocker ?. I know my bitlocker, but can't sign in ?. Problems with bitlocker ?. We will help you with bitlocker recovery tool.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.6s"
            >
              <div
                className={`${
                  open === "p3"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p3")}
              >
                <div className="icon-bx-md radius bg-yellow shadow-yellow">
                  <a href="javascript:void(0);" className="icon-cell">
                    {/* <i className="flaticon-pie-charts"></i> */}
                    <img src="/images/raid.png" />
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">Raid Recovery</h4>
                  <p>
                    Getting tired of enquiring and facing issues for raid disks recovery and still not getting data, Don't worry, we're Here to help you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
