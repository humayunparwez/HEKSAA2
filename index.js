/* =========================================================
   HEKSAA — LANDING PAGE
   Batch 1
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const patientButton =
        document.getElementById("patientButton");

    const doctorButton =
        document.getElementById("doctorButton");

    const patientCardButton =
        document.querySelector(".patient-card-button");

    const doctorCardButton =
        document.querySelector(".doctor-card-button");

    const mobileMenuButton =
        document.getElementById("mobileMenuButton");

    const mobileNav =
        document.getElementById("mobileNav");


    /* =====================================================
       ROLE NAVIGATION
    ====================================================== */

    function openPatientAuth() {

        window.location.href =
            "auth.html?role=patient";

    }


    function openDoctorAuth() {

        window.location.href =
            "auth.html?role=doctor";

    }


    if (patientButton) {

        patientButton.addEventListener(
            "click",
            openPatientAuth
        );

    }


    if (doctorButton) {

        doctorButton.addEventListener(
            "click",
            openDoctorAuth
        );

    }


    if (patientCardButton) {

        patientCardButton.addEventListener(
            "click",
            openPatientAuth
        );

    }


    if (doctorCardButton) {

        doctorCardButton.addEventListener(
            "click",
            openDoctorAuth
        );

    }


    /* =====================================================
       MOBILE MENU
    ====================================================== */

    if (mobileMenuButton && mobileNav) {

        mobileMenuButton.addEventListener(
            "click",
            () => {

                const isOpen =
                    mobileNav.classList.toggle("open");

                mobileMenuButton.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );

            }
        );


        /* Close menu after navigation */

        mobileNav
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        mobileNav.classList.remove("open");

                        mobileMenuButton.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }
                );

            });

    }


    /* =====================================================
       MOBILE ROLE LINKS
    ====================================================== */

    document
        .querySelectorAll("[data-mobile-role]")
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    event.preventDefault();

                    const role =
                        link.dataset.mobileRole;

                    if (role === "doctor") {

                        openDoctorAuth();

                    } else {

                        openPatientAuth();

                    }

                }
            );

        });


    /* =====================================================
       KEYBOARD ACCESS
    ====================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key !== "Escape") {
                return;
            }

            if (mobileNav) {

                mobileNav.classList.remove("open");

            }

            if (mobileMenuButton) {

                mobileMenuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );

});
