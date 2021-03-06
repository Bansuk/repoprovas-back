--
-- PostgreSQL database dump
--

-- Dumped from database version 13.4 (Ubuntu 13.4-0ubuntu0.21.04.1)
-- Dumped by pg_dump version 13.4 (Ubuntu 13.4-0ubuntu0.21.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: category; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.category (
    id integer NOT NULL,
    name text NOT NULL
);


ALTER TABLE public.category OWNER TO postgres;

--
-- Name: category_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.category_id_seq OWNER TO postgres;

--
-- Name: category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.category_id_seq OWNED BY public.category.id;


--
-- Name: class; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.class (
    id integer NOT NULL,
    course_id integer NOT NULL,
    professor_id integer NOT NULL
);


ALTER TABLE public.class OWNER TO postgres;

--
-- Name: class_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.class_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.class_id_seq OWNER TO postgres;

--
-- Name: class_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.class_id_seq OWNED BY public.class.id;


--
-- Name: course; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.course (
    id integer NOT NULL,
    name text NOT NULL,
    term text NOT NULL
);


ALTER TABLE public.course OWNER TO postgres;

--
-- Name: course_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.course_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.course_id_seq OWNER TO postgres;

--
-- Name: course_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.course_id_seq OWNED BY public.course.id;


--
-- Name: exam; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.exam (
    id integer NOT NULL,
    name text NOT NULL,
    link text NOT NULL,
    category_id integer NOT NULL,
    class_id integer NOT NULL
);


ALTER TABLE public.exam OWNER TO postgres;

--
-- Name: exam_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.exam_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.exam_id_seq OWNER TO postgres;

--
-- Name: exam_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.exam_id_seq OWNED BY public.exam.id;


--
-- Name: professor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.professor (
    id integer NOT NULL,
    name text NOT NULL
);


ALTER TABLE public.professor OWNER TO postgres;

--
-- Name: professor_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.professor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.professor_id_seq OWNER TO postgres;

--
-- Name: professor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.professor_id_seq OWNED BY public.professor.id;


--
-- Name: category id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category ALTER COLUMN id SET DEFAULT nextval('public.category_id_seq'::regclass);


--
-- Name: class id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.class ALTER COLUMN id SET DEFAULT nextval('public.class_id_seq'::regclass);


--
-- Name: course id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course ALTER COLUMN id SET DEFAULT nextval('public.course_id_seq'::regclass);


--
-- Name: exam id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exam ALTER COLUMN id SET DEFAULT nextval('public.exam_id_seq'::regclass);


--
-- Name: professor id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.professor ALTER COLUMN id SET DEFAULT nextval('public.professor_id_seq'::regclass);


--
-- Data for Name: category; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.category (id, name) FROM stdin;
1	P1
2	P2
3	P3
4	PF
\.


--
-- Data for Name: class; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.class (id, course_id, professor_id) FROM stdin;
5	2	1
6	1	1
7	1	20
8	2	1
9	3	1
10	4	2
11	4	7
12	5	3
13	5	6
14	5	14
15	6	5
16	6	27
17	7	8
18	8	9
19	8	15
20	9	15
21	10	18
22	10	11
23	11	4
24	12	4
25	13	10
26	13	1
27	14	12
28	15	13
29	16	16
30	16	17
31	17	19
32	18	21
33	18	20
34	18	4
35	19	22
36	20	23
37	21	24
38	21	6
39	21	1
40	22	6
41	23	19
42	2	1
43	24	9
44	24	17
45	25	25
46	26	26
47	27	27
50	5	28
51	1	29
\.


--
-- Data for Name: course; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.course (id, name, term) FROM stdin;
1	Introdu????o ?? Engenharia	1??
2	Mec??nica Newtoniana	1??
3	Introdu????o ?? Programa????o	1??
4	Fluidos e Termodin??mica	2??
5	Qu??mica Geral	2??
6	Programa????o de Microcontroladores	2??
7	Eletromagnetismo	3??
8	Programa????o II	3??
9	L??gica para Computa????o	3??
10	Software B??sico	4??
11	Sinais e Sistemas	4??
12	Introdu????o ?? Matem??tica Discreta	4??
13	Sistemas de Computa????o	5??
14	Programa????o Modular	5??
15	Analisadores L??xicos e Sint??ticos	5??
16	Estruturas Discretas	6??
17	Programa????o Orientada a Objetos	6??
18	An??lise Num??rica I	6??
19	An??lise de Algoritmos	7??
20	Probabilidade e Estat??stica	7??
21	Redes de Comunica????o de Dados	7??
22	Arquitetura de Computadores	8??
23	Computa????o Digital	8??
24	Modelagem de Dados	8??
25	Circuitos El??tricos e Eletr??nicos I	Eletivas
26	Equa????es Diferenciais e de Diferen??as	Eletivas
27	Laborat??rio de Qu??mica Geral	Eletivas
\.


--
-- Data for Name: exam; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.exam (id, name, link, category_id, class_id) FROM stdin;
\.


--
-- Data for Name: professor; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.professor (id, name) FROM stdin;
1	Pen??lope Belo Dantas
2	Naiara Migu??is Ruela
3	Leila Leite Quintana
4	Deva Ribeiro Guilheiro
5	Mauro Bonito Viana
6	Cristov??o Sodr?? Silva
7	V??lter Landim Pimenta
8	Prapti Outeiro Silvestre
9	Ad??lia Prates Brochado
10	Edir Ver??ssimo Dorneles
11	Tobias Quina Vig??rio
12	Let??zia Cavadas Alpuim
13	Joaquim Rebotim Barroca
14	Ethan Xavier Mansilha
15	Al??xia Bragan??a Henriques
16	C??ndida Santiago Bugalho
17	Mickael Vieira Ces??rio
18	Ming Mort??gua Bri??o
19	Ab??lio Filgueiras Foqui??o
20	Maxim Fi??za Pimenta
21	Isaac Botelho Quinzeiro
22	Alycia In??s Toste
23	Atanas Xisto Franqueira
24	??ris Cavaco Machado
25	Luara Assun????o Minho
26	Fl??vio Dam??sio Moutinho
27	Ayani Gois Camilo
28	Izabella Camacho Cola??o
29	Evandro Simas Pontes
30	Kauan Sesimbra Mariz
\.


--
-- Name: category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.category_id_seq', 4, true);


--
-- Name: class_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.class_id_seq', 51, true);


--
-- Name: course_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.course_id_seq', 27, true);


--
-- Name: exam_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.exam_id_seq', 1, false);


--
-- Name: professor_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.professor_id_seq', 30, true);


--
-- Name: category category_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_name_key UNIQUE (name);


--
-- Name: category category_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pk PRIMARY KEY (id);


--
-- Name: class class_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.class
    ADD CONSTRAINT class_pk PRIMARY KEY (id);


--
-- Name: course course_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course
    ADD CONSTRAINT course_name_key UNIQUE (name);


--
-- Name: course course_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course
    ADD CONSTRAINT course_pk PRIMARY KEY (id);


--
-- Name: exam exam_link_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exam
    ADD CONSTRAINT exam_link_key UNIQUE (link);


--
-- Name: exam exam_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exam
    ADD CONSTRAINT exam_pk PRIMARY KEY (id);


--
-- Name: professor professor_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.professor
    ADD CONSTRAINT professor_pk PRIMARY KEY (id);


--
-- Name: class class_fk0; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.class
    ADD CONSTRAINT class_fk0 FOREIGN KEY (course_id) REFERENCES public.course(id);


--
-- Name: class class_fk1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.class
    ADD CONSTRAINT class_fk1 FOREIGN KEY (professor_id) REFERENCES public.professor(id);


--
-- Name: exam exam_fk0; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exam
    ADD CONSTRAINT exam_fk0 FOREIGN KEY (category_id) REFERENCES public.category(id);


--
-- Name: exam exam_fk1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exam
    ADD CONSTRAINT exam_fk1 FOREIGN KEY (class_id) REFERENCES public.class(id);


--
-- PostgreSQL database dump complete
--