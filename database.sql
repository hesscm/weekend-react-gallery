--Database name: 'react_gallery'

-- Table structure
CREATE TABLE gallery (
	id SERIAL PRIMARY KEY,
	path VARCHAR(255) NOT NULL,
	description VARCHAR(255) NOT NULL,
	likes INTEGER DEFAULT 0
);

INSERT INTO gallery (path, description)
VALUES 
('images/2017_boston_gig.jpg', 'One of my many Navy gigs. Taken at Fenway Park in Boston, MA!'),
('images/2018_trip.jpg', 'My wife and I on a trip at the top of one of the many mountains in Vermont. VERY windy!'),
('images/preemie_andrew.jpg', 'Andrew in the NICU a few days after birth.'),
('images/preemie_william.jpg', 'William in the NICU a few days after birth.'),
('images/andrew_aug_2021.jpg', 'Happy Andrew at nearly 2 years old. Dad is terrified in the background that he will get sand in his eyes.'),
('images/william_aug_2021.jpg', 'William enjoying a drink. Nearly 2 years old!'),
('images/goat_small.jpg', 'The greatest secret of Chris Black.')

;

SELECT * FROM gallery;
