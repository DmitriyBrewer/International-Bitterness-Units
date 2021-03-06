import React, { useEffect } from "react";
//MUI
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import CircleIcon from "@mui/icons-material/Circle";
import { Switch, Slider } from "@mui/material";
import BulletedList from "../components/UI/list/BulletedList";
import { TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
//MUI


const About = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ bgcolor: "none" }}>
          <div style={{ marginTop: "25px" }}>
            <Typography variant="h4" component="h2" gutterBottom>
              Общее описание
            </Typography>
          </div>
          <Typography variant="subtitle1" component="h3" gutterBottom>
            Калькулятор IBU предназначен для калькуляции расчётной горечи пива. В
            основу калькуляции заложена формула Тинсета.
          </Typography>
          <Typography variant="h4" component="h2" gutterBottom>
            Кому подойдёт калькулятор
          </Typography>
          <Typography variant="subtitle1" component="h3" gutterBottom>
            Меня зовут Дмитрий Яненко, я являюсь практикующим пивоваром, часто
            сталкиваюсь с расчётом IBU, поэтому и принял решения разработать
            удобный с точки зрения UI и практичный с точки зрения пивоварения
            калькулятор. Калькулятор подойдёт как и промышленному пивовару так и
            для домашнего пивоварения.{" "}
          </Typography>
          <img
            src="https://avatars.githubusercontent.com/u/91193945?v=4"
            alt="альтернативный текст"
            width={"30%"}
          />
          <Typography variant="subtitle1" component="h3" gutterBottom>
            Основная задача калькулятора, дать пивовару возможность быстро
            рассчитывать IBU, в течении реального времени менять параметры и
            принимать решения по корректировке хмеля на варке.
          </Typography>
          <Typography variant="h4" component="h2" gutterBottom>
            Обзор возможностей
          </Typography>
          <Grid item xs={12} md={6}>
            <List>
              <BulletedList textContent="Получение расчётной горечи пива" />
              <BulletedList textContent="Возможность добавлять до 5 хмелей на варку/вирпул, каждый хмель имеет своё IBU" />
              <BulletedList textContent="Возможность редактировать IBU. С помощью инструмента Slider можно легко в  реальном времени изменить кол-во добавляемого хмеля, тем самым меняя горечь которую даст конкретный хмель и увидеть как хмель изменит общее IBU" />
              <BulletedList textContent="Возможность удалять хмель" />
              <BulletedList textContent="Возможность настраивать максимальное значение инструмента Slider" />
            </List>
            <Typography variant="h4" component="h2" gutterBottom>
              Инструкция
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
              Состав полей
            </Typography>
            <div style={{ width: "70%" }}>
              <TextField required={true} label='Обязательное поле ввода' sx={{width:"100%", margin:'10px'}} size="small"/>
            </div>
            <div style={{ width: "70%" }}>
            <TextField label='Необязательное поле ввода' sx={{width:"100%", margin:'10px'}} size="small"/>
            </div>
            <div style={{ width: "70%" }}>
            <TextField label='Ошибка ввода поля' sx={{width:"100%", margin:'10px'}} error size="small"/>
            </div>
            <Typography variant="subtitle1" component="h3" gutterBottom>
              Калькулятор разделён на две части:
            </Typography>
            <Typography variant="subtitle1" component="h3" gutterBottom>
              1. Сусло:
            </Typography>
            <List>
              <BulletedList textContent="Объём получаемого сусла, л" />
              <BulletedList textContent="Ожидаемая/расчётная плотность сусла, Plato" />
              <BulletedList textContent="Общее время кипячения сусла, мин" />
            </List>
            <Typography variant="subtitle1" component="h3" gutterBottom>
              2. Хмель:
            </Typography>
            <List>
              <BulletedList textContent="Наименование хмеля" />
              <BulletedList textContent="Альфа кислота(см. на упаковке или уточняйте у производителя хмеля)" />
              <BulletedList textContent="Количество данного хмеля на варку, г" />
              <BulletedList textContent="Время внесения хмеля, от начала кипячения, мин " />
            </List>
            <Typography variant="h5" component="h2" gutterBottom>
              Дополнительные поля:{" "}
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CircleIcon style={{ width: "10px" }} />
                </ListItemIcon>
                <ListItemText primary="Поле Max-IBU позволяет вкл/выкл настройку максимального кол-во хмеля для поля Slider " />
                <Switch />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CircleIcon style={{ width: "10px" }} />
                </ListItemIcon>
                <ListItemText primary="Поле Slider изменяет Количество данного хмеля на варку, г " />
                <Slider />
              </ListItem>
            </List>
            <Typography variant="h4" component="h2" gutterBottom>
              Список обновлений
            </Typography>
            <Typography variant="subtitle1" component="h3" gutterBottom>
              Февраль версия 2.1
            </Typography>
            <List>
              <BulletedList textContent="Выбор вводимой плотности SG или Plato" />
              <BulletedList textContent="Валидация полей" />
              <BulletedList textContent="Расчёт горечи для Virpul/Hopstand" />
              <BulletedList textContent="Частичное изменение дизайна" />
              <BulletedList textContent="Возможность сворачивать/разворачивать хмель" />
              <BulletedList textContent="Возможность менять тему светлая/тёмная" />
              <BulletedList textContent="Исправлена ошибка ввода при переводе Plato в SG" />
              <BulletedList textContent="Исправлена ошибка калькуляции при переводе введённой Plato в SG" />
            </List>
            <Typography variant="h4" component="h2" gutterBottom>
              Ожидаемые обновления
            </Typography>
            <Typography variant="subtitle1" component="h3" gutterBottom>
              Список и ориентировочные даты предстоящих обновлений приложения:
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
              Июль 2022:
            </Typography>
            <List>
              <BulletedList textContent="Личный кабинет пивовара, где будут хранится калькуляции" />
            </List>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default About;
