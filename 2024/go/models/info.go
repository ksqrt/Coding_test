package models

type Info struct {
	Id    int    `json:"id" gorm:"primary_key"`
	Name  string `json:"name"`
	Email string `json:"email"`
}
