CREATE TABLE IF NOT EXISTS public.ToDo(
    id      serial
            primary key,
    Description     VARCHAR(255),
    Completed       BOOLEAN NOT NULL
);

