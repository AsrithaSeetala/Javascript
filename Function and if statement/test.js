function batting(player, distance) {

    if (distance <= 200 && distance > 0) {
        document.write(player + " hit the ball");
    }
    else if (distance <= 0 ) {
        document.write(player + " STRUCK OUT");
    } 
    else {
        document.write(player + " hit a home run");
    } 
}

batting ("Asritha", 0);
