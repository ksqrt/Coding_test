package models

import (
	_ "github.com/go-sql-driver/mysql"
	_ "github.com/jinzhu/gorm/dialects/mysql"

	"github.com/jinzhu/gorm"
)

var DB *gorm.DB

func ConnectDatabase() {
	var err error
	DB, err = gorm.Open("mysql", "유저명:비밀번호@tcp(주소:포트)/test?charset=utf8")
	if err != nil {
		panic(err)
	}

	// table 명은 구조체명의 복수형으로 자동 명명된다.
	// column 명은 구조체 필드의 소문자 snake case의 이름을 가진다.
	DB.AutoMigrate(&Info{})

	DB.DB().SetMaxIdleConns(10)  // idle connection pool(유휴 연결 풀)의 최대 수 설정
	DB.DB().SetMaxOpenConns(100) // 데이터베이스에 대한 열린 연결의 최대 수 설정
}
