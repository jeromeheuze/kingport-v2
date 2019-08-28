<?php
include "./includes/global.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Kingport Corporation</title>
    <?php include "./includes/head.php"; ?>
</head>
<body>

<header class="header-cont bootstrap-wrapper" id="top">
    <nav>
        <div class="container-fluid">
        <div class="row">
            <div class="col-6 col-sm-4 col-md-3 branding"><a href="#top"><h1>Kingport Corporation</h1></a></div>
            <div class="col-sm-12 col-md-6 menu" data-status="closed">
                <ul>
                    <li><a href="/aboutus.php">About Us</a></li>
                    <li><a href="#ConsultingPractice">Consulting Practice</a></li>
                    <li><a href="#Services">Services</a></li>
                    <li><a href="#Testimonials">Testimonials</a></li>
                    <li><a href="#DidYouKnow">Did You Know?</a></li>
                </ul>
            </div>
            <div class="col-6 col-sm-4 col-md-3 call-widget">
                <ul>
                    <li class="tri"><div class="triangle"></div></li>
                    <li><a href="callto:+18054484200">Call Us +1 (805)448-4200</a></li>
                </ul>
            </div>
        </div>
        </div>
    </nav>
</header>

<div class="banner full desk bootstrap-wrapper">
    <div class="container">
        <div class="row">
            <div class="col-md-12"><h1 class="line1 centered">Maximize resources Productivity</h1><p class="line2 centered">+</p><p class="line3 centered">Increase The Bottom Line</p></div>
            <div class="col-md-12 centered"><a href="#Services" data-scroll='smooth' data-id="Services" class="btn btn-dark btn-lg" role="button" aria-pressed="true">View Services</a></div>
        </div>
    </div>
</div>
<main>
    <?php include "./includes/Contact.php"; ?>
    <?php include "./includes/ConsultingPractice.php"; ?>
    <?php include "./includes/Services.php"; ?>
    <?php include "./includes/Testimonials.php"; ?>
    <?php include "./includes/DidYouKnow.php"; ?>
    <?php include "./includes/footer.php"; ?>
</main>
<?php include "./includes/scripts.php"; ?>
<script type="text/javascript">
</script>
</body>
</html>