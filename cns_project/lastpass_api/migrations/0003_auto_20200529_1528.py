# Generated by Django 2.2 on 2020-05-29 09:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lastpass_api', '0002_auto_20200525_2014'),
    ]

    operations = [
        migrations.AlterField(
            model_name='passwordconverter',
            name='category',
            field=models.CharField(choices=[('AES Cryptography', 'AES Cryptography'), ('Hill Cipher', 'Hill Cipher'), ('Rail Fence', 'Rail fence'), ('caesar Cipher', 'Ceasar Cipher'), ('Column Transpose Cipher', 'Column Transpose Cipher')], max_length=200, null=True),
        ),
    ]
