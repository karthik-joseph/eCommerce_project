FROM python:3.9-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

COPY src/eCommerce/requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY src/eCommerce/ .

EXPOSE 8080

CMD ["gunicorn", "eCommerce.wsgi:application", "--bind", "0.0.0.0:8080"]