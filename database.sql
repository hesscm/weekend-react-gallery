--Database name: 'react_gallery'

-- Table structure
CREATE TABLE gallery (
	id SERIAL PRIMARY KEY,
	path VARCHAR(255) NOT NULL,
	description VARCHAR(255) NOT NULL,
	likes INTEGER DEFAULT 0
);

INSERT INTO gallery (path, description)
VALUES ('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.'),
('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.'),
('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.'),
('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.'),
('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.');

SELECT * FROM gallery;
