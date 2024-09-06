document.querySelector('.showall').addEventListener('click', function () {
    const cardContainer = document.querySelector('.cardContainer');

    // Additional artist cards to be added
    const additionalCards = `
        <div class="card">
            <img src="artistsImg/7.jpeg" alt="">
            <span class="play">
                <img src="svgs/play.svg" alt="">
            </span>
            <h2>Atif Aslam</h2>
            <p>Artist</p>
        </div>
        <div class="card">
            <img src="artistsImg/8.jpeg" alt="">
            <span class="play">
                <img src="svgs/play.svg" alt="">
            </span>
            <h2>Vishal-Shekhar</h2>
            <p>Artist</p>
        </div>
        <div class="card">
            <img src="artistsImg/9.jpeg" alt="">
            <span class="play">
                <img src="svgs/play.svg" alt="">
            </span>
            <h2>Udit Narayan</h2>
            <p>Artist</p>
        </div>
        <div class="card">
            <img src="artistsImg/10.jpeg" alt="">
            <span class="play">
                <img src="svgs/play.svg" alt="">
            </span>
            <h2>Karan Aujla</h2>
            <p>Artist</p>
        </div>
        <div class="card">
            <img src="artistsImg/11.jpeg" alt="">
            <span class="play">
                <img src="svgs/play.svg" alt="">
            </span>
            <h2>Darshan Raval</h2>
            <p>Artist</p>
        </div>
        <div class="card">
            <img src="artistsImg/12.jpeg" alt="">
            <span class="play">
                <img src="svgs/play.svg" alt="">
            </span>
            <h2>Diljit Dosanjh</h2>
            <p>Artist</p>
        </div>
        <div class="card">
            <img src="artistsImg/13.jpeg" alt="">
            <span class="play">
                <img src="svgs/play.svg" alt="">
            </span>
            <h2>Badshah</h2>
            <p>Artist</p>
        </div>
        <div class="card">
            <img src="artistsImg/14.jpeg" alt="">
            <span class="play">
                <img src="svgs/play.svg" alt="">
            </span>
            <h2>KK</h2>
            <p>Artist</p>
        </div>
        <div class="card">
            <img src="artistsImg/15.jpeg" alt="">
            <span class="play">
                <img src="svgs/play.svg" alt="">
            </span>
            <h2>Shreya Ghoshal</h2>
            <p>Artist</p>
        </div>
        <div class="card">
            <img src="artistsImg/16.jpeg" alt="">
            <span class="play">
                <img src="svgs/play.svg" alt="">
            </span>
            <h2>Sonu Nigam</h2>
            <p>Artist</p>
        </div>
        <div class="card">
            <img src="artistsImg/17.jpeg" alt="">
            <span class="play">
                <img src="svgs/play.svg" alt="">
            </span>
            <h2>Sachet Tandon</h2>
            <p>Artist</p>
        </div>
        <div class="card">
            <img src="artistsImg/18.jpeg" alt="">
            <span class="play">
                <img src="svgs/play.svg" alt="">
            </span>
            <h2>Shankar Mahadevan</h2>
            <p>Artist</p>
        </div>
        <div class="card">
            <img src="artistsImg/19.jpeg" alt="">
            <span class="play">
                <img src="svgs/play.svg" alt="">
            </span>
            <h2>Tanishk Bagchi</h2>
            <p>Artist</p>
        </div>
        <div class="card">
            <img src="artistsImg/20.jpeg" alt="">
            <span class="play">
                <img src="svgs/play.svg" alt="">
            </span>
            <h2>Jasleen Royal</h2>
            <p>Artist</p>
        </div>
    `;

    // Append the additional cards to the card container
    cardContainer.innerHTML += additionalCards;

    // Optionally, you can remove the "show all" button after the cards are added
    this.style.display = 'none';

    cardContainer.style.overflowY = 'scroll'
    cardContainer.style.maxHeight = '58vh';
});
async function main() {
    // Array of local song files
    let songs = [
        'songs/Anuv Jain - HUSN.mp3',
        'songs/Anuv Jain - JO TUM MERE HO.mp3',
        'songs/Arijit Singh - KHAIRIYAT.mp3',
        'songs/Ashe - Moral of the Story.mp3',
        'songs/Avicii - The Nights.mp3',
        'songs/King - KODAK.mp3',
        'songs/King - TERE HO KE.mp3',
        'songs/King - WARCRY.mp3',
        'songs/Lana Del Rey - Born To Die.mp3',
        'songs/Lana Del Rey - Cinnamon Girl.mp3',
        'songs/Lana Del Rey - Diet Mountain Dew.mp3',
        'songs/Lana Del Rey - Radio.mp3',
        'songs/Lana Del Rey - Say Yes To Heaven.mp3',
        'songs/Lana Del Rey - Summertime Sadness.mp3',
        'songs/Lana Del Rey - Young and Beautiful.mp3',
        'songs/The Local Train - Choo Lo.mp3'
    ];

    let currentAudio = null;
    const playButton = document.getElementById('playButton');
    const progressBar = document.getElementById('progressBar');
    const currentTimeSpan = document.getElementById('currentTime');
    const durationTimeSpan = document.getElementById('durationTime');

    // Function to play/pause audio
    function togglePlayPause(audio) {
        if (audio.paused) {
            audio.play();
            playButton.src = 'svgs/buttons/pause.svg'; // Change to pause button
        } else {
            audio.pause();
            playButton.src = 'svgs/buttons/play.svg'; // Change back to play button
        }
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }

    playButton.addEventListener('click', () => {
        if (currentAudio) {
            togglePlayPause(currentAudio);
        }
    });

    progressBar.addEventListener('input', () => {
        if (currentAudio) {
            currentAudio.currentTime = (progressBar.value / 100) * currentAudio.duration;
        }
    });

    // Instead of fetching, just use the local array of song paths
    for (let i = 0; i < 16; i++) {
        if (i < songs.length) {
            document.getElementById(`s${i + 1}`).addEventListener('click', () => {
                if (currentAudio && !currentAudio.paused) {
                    currentAudio.pause();
                }

                // Create a new Audio object with the local song file
                currentAudio = new Audio(songs[i]);
                togglePlayPause(currentAudio);

                currentAudio.addEventListener('timeupdate', () => {
                    const currentTime = currentAudio.currentTime;
                    const duration = currentAudio.duration;
                    const progressPercent = (currentTime / duration) * 100;
                    progressBar.value = progressPercent;
                    currentTimeSpan.textContent = formatTime(currentTime);
                    progressBar.style.setProperty('--value', `${progressPercent}%`);
                });

                currentAudio.addEventListener('loadedmetadata', () => {
                    durationTimeSpan.textContent = formatTime(currentAudio.duration);
                });

                currentAudio.addEventListener("ended", () => {
                    playButton.src = 'svgs/buttons/play.svg'; // Reset to play button after song ends
                });
            });
        } else {
            console.warn(`Button s${i + 1} has no corresponding song.`);
        }
    }
}

main();
