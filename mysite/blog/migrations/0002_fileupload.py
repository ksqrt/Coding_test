# Generated by Django 4.0.6 on 2022-07-21 08:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='FileUpload',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField(max_length=40, null=True)),
                ('imgfile', models.ImageField(blank=True, null=True, upload_to='')),
                ('content', models.TextField()),
            ],
        ),
    ]