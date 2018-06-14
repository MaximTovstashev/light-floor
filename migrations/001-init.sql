-- Up
CREATE TABLE event (
	id INTEGER NOT NULL,
	name VARCHAR(1024) NOT NULL,
	CONSTRAINT event_PK PRIMARY KEY (id)
) ;
CREATE UNIQUE INDEX event_name_IDX ON event (name) ;
CREATE UNIQUE INDEX event_id_IDX ON event (id) ;

-- Down

DROP TABLE event;
